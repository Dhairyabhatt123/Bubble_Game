var timer = 60;
var innerscore = 0;
var hitrn = 0;


function getscore(){
    innerscore += 10;
    document.querySelector("#score").textContent = innerscore;
}

// var crsrblur = document.querySelector("#cursorblur")
// document.addEventListener("mousemove",function(dets){
//     // tells us about mouse movement -- dets
//     crsrblur.style.left = dets.x - 100+"px"
//     crsrblur.style.top = dets.y - 100+"px"
// })

function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble(){
    var count = "";
for(var i=0;i<133;i++){
    var random = Math.floor(Math.random() * 10);
    // kuki we want a different div, as a bubble 
    count += `<div id="bubble">${random}</div>`
}
document.querySelector("#btmclm").innerHTML = count;
}

function makeTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timmer").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("btmclm").innerHTML = `<h1>GAME OVER</h1> <H3>your score is ${innerscore}</H3>`;
        }
    },1000);
}

// agr bubble p event listner lagate to 133 bubble pr lagana hota isiliye apn ne btmclm choose kia
// var hitno = document.querySelector("hitval");
document.querySelector("#btmclm")
.addEventListener("click",function(dets){
    // alert();
    var clicked = Number(dets.target.textContent);
    if(clicked === hitrn){
        getscore();
        makebubble();
        gethit();
}
});

gethit();
makeTimer();
makebubble();
// getscore();