
  let navBar = document.querySelector('nav ul');
  tbars.addEventListener('click',function(){
    navBar.classList.toggle('navact')
  })
  document.querySelector('main').addEventListener('click', navHide)
  function navHide(){
    navBar.classList.remove('navact')
  }
