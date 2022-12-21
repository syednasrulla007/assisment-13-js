let ele = document.getElementById("text")
console.log(ele.innerText)
let ele1 = document.getElementsByTagName("p")
let hello = document.getElementById("li")
hello.innerText="hello world"


let container=document.getElementById("cont")
let btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    cont.style.flexDirection="column"
})


let heading=document.getElementById("heading")
function changecolor(){
    heading.style.color="red"
}
changecolor()


let textchange=document.getElementById("textchange")
let button=document.getElementById("btn2")
button.addEventListener("click",function(){
    textchange.innerText="Welcome to Elevation academy"
})




function timer(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // console.log(time);
    console.log(hrs,min,sec);
    document.getElementById("clock").innerHTML = hrs+":"+min+":"+sec+ 
    setInterval(timer, 1000)
}


let select=document.getElementById("select")
let output=document.getElementById("output")
select.addEventListener("change",function(event){
    let selected=(event.target.selectedOptions[0].innerText)
    console.log(selected)
    output.innerText=selected
})