//header toggle 

let MenuBtn =document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typing effect
let typed =new Typed('.auto-input',{
    strings:[' a Python Developer!','a Php developer!','a Freelancer!','a Software Engineer!','an Ionic Expert!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:200,
    loop:true
})
//Active link state on scroll
//get all links
let navLinks= document.querySelectorAll('nav ul li a')
//get all sections
let sections=document.querySelectorAll('section')
 

window.addEventListener('scroll', function (){
    const scrollPos=this.window.scrollY
    sections.forEach(section=>{
        if(scrollPos>section.offsetTop && scrollPos <(section.offsetTop +section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }

            });
        }
    })
})