/*~~~~~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~~~~~*/ 
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle("ri-close-large-line")
  navbar.classList.toggle('active')
})  

//active links
let section = document.querySelectorAll("section")
let navlinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
       navlinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add("active")
       })
    }
  })
}

    // sticky navbar
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle icon and navbar when click navbar link (scroll)


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/ 
const scrollUp =() =>{
  const scrollUp = document.getElementById("scroll")

  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll") 
}


window.addEventListener('scroll', scrollUp)
/*~~~~~~~~~~~~~~~ ANIMATION ~~~~~~~~~~~~~~~*/ 

const sr = ScrollReveal({
  reset:true,
  distance: "80px",
  duration: 2000,
  delay: 200
})

sr.reveal(".home-content, .heading", {origin: 'top'})
sr.reveal(".home-img, .services-container, .portfolio-box, .contact form  ", {origin: 'bottom'})
sr.reveal(".home-content h1, .about-img", {origin: 'left'})
sr.reveal(".home-contant p, .about-content", {origin: 'right'})
/*~~~~~~~~~~~~~~~ TYPED JS ~~~~~~~~~~~~~~~*/ 
const typedHome = new Typed(".multiple-text",{
    strings: ['Frontend Developer' , 'YouTuber'],
    typeSpeed:100,
    backspeed:10,
    backDelay:1000,
    loop:true

})
