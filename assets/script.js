let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3500); // Change image every 2 seconds
  }
  let navBar = document.querySelector('nav ul');
  tbars.addEventListener('click',function(){
    navBar.classList.toggle('navact')
  })
  document.querySelector('main').addEventListener('click', navHide)
  function navHide(){
    navBar.classList.remove('navact')
  }