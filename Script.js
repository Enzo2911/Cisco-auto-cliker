function generate(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}
var Delay = generate(60000, 200000);
var myVar = setInterval(buttonclick, Delay);
var DelayenMinute = Delay/60000;
function buttonclick(){
var pagebutton= document.getElementById("page-menu-next-button");
pagebutton.click();
console.log("Page Skip après "+DelayenMinute+" Minute.");
}
