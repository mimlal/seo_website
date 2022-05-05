const heroSection=document.querySelector(".section-hero")

// creating responsive navbar 
const mobile_nav=document.querySelector(".mobile-navbar-btn");
const headerEle=document.querySelector(".header")

mobile_nav.addEventListener("click",()=>{
  headerEle.classList.toggle('active')
})

// creating sticky navbar 

const observer =new IntersectionObserver((entries)=>{
  const ent=entries[0];
  !ent.isIntersecting 
  ? document.body.classList.add("sticky")
  : document.body.classList.remove("sticky")
},
{root:null,
threshold:0
})
observer.observe(heroSection);

// creating portfolio 
const p_btns= document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const p_img_elem=document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click",(e)=>{
   const p_btns_clicked=e.target;
   console.log(p_btns_clicked)
   if(!p_btns_clicked.classList.contains("p-btn"));
   p_btn.forEach((curElem)=>{
       curElem.classList.remove("p-btns-active");
   })
  p_btns_clicked.classList.add("p-btns-active");
//    getting number of data attriutes 
  const btn_num=p_btns_clicked.dataset.btnNum;
  const img_active=document.querySelectorAll(`.p-btn--${btn_num}`)
  p_img_elem.forEach((curElem)=>{
      curElem.classList.add("p-image-not-active")
  })
  img_active.forEach((curElem)=>{
      curElem.classList.remove("p-image-not-active")
  })
 
})

// swiper 
 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay:{
          delay:2500,
         },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

const myJsMedia=(widthSize)=>{
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    
    });

  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
     
    });

  }
}
const widthSize = window.matchMedia("(max-width:780px)");
myJsMedia(widthSize);

widthSize.addEventListener("change",myJsMedia);

// scroll bar 

const footerElement=document.querySelector(".section-footer")
const scrollElement= document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML=`
<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>;
`;
footerElement.after(scrollElement);
const scrollTop =()=>{
  heroSection.scrollIntoView({behavior:"smooth"})
}
scrollElement.addEventListener("click",(scrollTop))

// smooth scrolling 
const portfolioSec = document.querySelector(".section-portfolio")
const contactSec = document.querySelector(".section-contact")
document.querySelector(".portfolio-link").addEventListener('click',()=>{
  portfolioSec.scrollIntoView({behavior:"smooth"})
})
document.querySelector(".hireme-btn").addEventListener("click",(e)=>{
  e.preventDefault();
  contactSec.scrollIntoView({behavior:"smooth"})
})


const workSection=document.querySelector(".section-work-data")
const workObserver =new IntersectionObserver((entries,observer)=>{
  const [entry] =entries;
  if(!entry.isIntersecting) return;
  // animate count 
const counterNum=document.querySelectorAll(".counter-numbers");
const speed =200;
counterNum.forEach((curElem)=>{
  // update number 
  const updateNumber=()=>{
    const targetNumber=parseInt(curElem.dataset.number);
    // console.log(targetNumber)
    const initailNum=parseInt(curElem.innerText);
    // console.log(initailNum)
    const incrementNumber=Math.trunc(targetNumber / speed);
    if(initailNum < targetNumber){
      curElem.innerText=`${initailNum + incrementNumber} +`;
      setTimeout(updateNumber,10)
    }
  }
    updateNumber()
  
})
observer.unobserve(workSection)
},
{
  root:null,
  threshold:0,
})
workObserver.observe(workSection)
