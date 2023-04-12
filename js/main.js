// var checkReSkill = 1;
function play() {
    document.querySelector('.start').style.display = 'none';
    
    
function runSkill(){

map = document.querySelector('.map');
champion = document.querySelector('.champion');
skill = document.querySelectorAll('.skill');
skill1 = document.querySelectorAll('.skill1');
skill2 = document.querySelectorAll('.skill2');

}
runSkill();

map.addEventListener('click', (e) => {
    // console.log('x = ' + e.clientX);
    // console.log('y = ' + e.clientY);
    champion.style.left = e.clientX -12.5 + 'px';
    champion.style.top = e.clientY - 18.75 + 'px';
    // console.log(Math.random() * 100);
})


var score = 0;
var score2 = score;
var level = 1;




function runSkill3() {




var intervalSkill = setInterval(function() {

    


function runSkill2(){

       
       
    skill1.forEach(ele => {
        pointRandom1 = Math.random() * 99;
        pointRandom2 = Math.random() * 99;
        if(ele.offsetLeft == 0){
            ele.style.left = 'calc(100% - 10px)';
            ele.style.top = pointRandom1 + '%';
        }else {
            ele.style.left = 0 + 'px';
            ele.style.top = pointRandom2 + '%';
        }
    })
    
    skill2.forEach(ele => {
        pointRandom1 = Math.random() * 99;
        pointRandom2 = Math.random() * 99;
        if(ele.offsetTop == 0){
            ele.style.left = pointRandom1 + '%';
            ele.style.top = 'calc(100% - 10px)';
        }else {
            ele.style.left = pointRandom2 + '%';
            ele.style.top = 0 + 'px';
        }
    })
    
    
}
runSkill2();

    
    score++;
    document.querySelector('.board').innerHTML = 'Score: ' + score + '<br>Level: ' + level;


        if(score == score2 + 5){
            score2 = score;
            level++;
        var chuaSkill = `
        <div class="skill skill1"></div>
        <div class="skill skill2"></div>`;

        document.querySelector('.allSkill').innerHTML += chuaSkill;

        // if(checkReSkill == 1)document.querySelector('.allSkill').innerHTML += chuaSkill;
        // else {
        //     document.querySelector('.allSkill').innerHTML = chuaSkill; 
        //     checkReSkill = 1;
        // }
        // console.log(checkReSkill);
        // clearInterval(intervalSkill);
        runSkill();
        runSkill2();

        // score = 0;
    }



}, 3000)





// var checkScore = setInterval(function(){
//     if(score == 3){
//         var chuaSkill = `
//         <div class="skill skill1"></div>
//         <div class="skill skill2"></div>`;
//         document.querySelector('.allSkill').innerHTML += chuaSkill;
//         // clearInterval(intervalSkill);
//     }
// },3000)



// }
// runSkill();









setInterval(function() {
widthSkill = [];
leftSkill = [];
heightSkill = [];
topSkill = [];
    skill.forEach(el => {
        widthSkill.push(el.offsetWidth/2);
        leftSkill.push(el.offsetLeft + el.offsetWidth/2)
        heightSkill.push(el.offsetHeight/2);
        topSkill.push(el.offsetTop + el.offsetHeight/2)
    })
for(var i = 0 ; i < skill.length ; i++){
    var checkCham1 = champion.offsetWidth/2 + widthSkill[i]; 
    var checkCham2 = champion.offsetHeight/2 + heightSkill[i];
    var checkCham3 = (champion.offsetLeft + champion.offsetWidth/2) - leftSkill[i];
    var checkCham4 = (champion.offsetTop + champion.offsetHeight/2) - topSkill[i];
    if(checkCham3 < 0)checkCham3 = -checkCham3;
    if(checkCham4 < 0)checkCham4 = -checkCham4;
    if((checkCham3<checkCham1) && (checkCham4<checkCham2)){
        document.querySelector('.gameOver').style.display = 'flex';
        clearInterval(intervalSkill);
        // clearInterval(checkScore);
    }
}
    // console.log(widthSkill);
    // console.log(heightSkill);
    // console.log(champion.offsetWidth/2);
    // console.log(champion.offsetHeight/2);
    // console.log(checkCham1);
    // console.log(checkCham2);
    // console.log(checkCham3);


})



// document.querySelector('.gameOver').style.display = 'none';


}
runSkill3();





document.querySelector('.replay').addEventListener('click', e => {
    document.querySelector('.gameOver').style.display = 'none';
    score = 0;
    level = 1;
    score2 = score;
    // clearInterval(intervalSkill);
    document.querySelector('.allSkill').innerHTML = `
    <div class="skill skill1"></div>
    <div class="skill skill2"></div>`;
    // checkReSkill = 2;
    runSkill();
    // runSkill2();
    runSkill3();
})
// function replay() {

// }


}