const clockContainer = document.querySelector(".clock");
const clockTitle = document.querySelector(".clock-title");
const clickBtn = document.querySelector(".click-btn");
const btnFirst = document.querySelector(".first");
const btnSecond = document.querySelector(".second");
const btnThird= document.querySelector(".third");
const btnFourth= document.querySelector(".fourth");
const btnFifth= document.querySelector(".fifth");
const scrollIntoFirst = document.querySelector(".section-1");
const scrollIntoSecond = document.querySelector(".section-2");
const scrollIntoThird = document.querySelector(".section-3");
const scrollIntoFourth = document.querySelector(".section-4");
const scrollIntoFifth = document.querySelector(".section-5");



function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes(); 
    const seconds = date.getSeconds();

clockTitle.innerHTML = `${ hours < 10 ? `0${hours}` : hours}:
${minutes< 10 ? `0${minutes}` : minutes}:
${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000)
}
init();


btnFirst.addEventListener('click',function(){
    scrollIntoFirst.scrollIntoView({behavior : 'smooth'});
});
btnSecond.addEventListener('click',function(){
    scrollIntoSecond.scrollIntoView({behavior : 'smooth'});
});
btnThird.addEventListener('click',function(){
    scrollIntoThird.scrollIntoView({behavior : 'smooth'});
});
btnFourth.addEventListener('click',function(){
    scrollIntoFourth.scrollIntoView({behavior : 'smooth'});
});
btnFifth.addEventListener('click',function(){
    scrollIntoFifth.scrollIntoView({behavior : 'smooth'});
});