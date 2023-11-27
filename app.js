const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


const toggleBtn =document.querySelector('.toggle_btn')
const toggleBtnIcon =document.querySelector('.toggle_btn i')
const dropDownMenu =document.querySelector('.dropdown_menu')

const navbar =document.querySelector('.navbar')


toggleBtn.onclick=function(){
        dropDownMenu.classList.toggle('open')
        navbar.classList.add('scrolled');
}




document.addEventListener('scroll',()=>{
    
    if (window.scrollY > 0){
            navbar.classList.add('scrolled');
              
    }else{
        navbar.classList.remove('scrolled');
    }
});

