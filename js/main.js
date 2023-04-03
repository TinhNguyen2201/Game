map = document.querySelector('.map');
champion = document.querySelector('.champion');
skill = document.querySelectorAll('.skill');
skill1 = document.querySelectorAll('.skill1');
skill2 = document.querySelectorAll('.skill2');

map.addEventListener('click', (e) => {
    console.log('x = ' + e.clientX);
    console.log('y = ' + e.clientY);
    champion.style.left = e.clientX -12.5 + 'px';
    champion.style.top = e.clientY - 18.75 + 'px';
    console.log(Math.random() * 100);
})

setInterval(function() {
    skill1.forEach(ele => {
        pointRandom1 = Math.random() * 99;
        pointRandom2 = Math.random() * 99;
        if(ele.offsetLeft == 0){
            ele.style.left = 99 + '%';
            ele.style.top = pointRandom1 + '%';
        }else {
            ele.style.left = 0 + 'px';
            ele.style.top = pointRandom2 + '%';
        }
    })

    // console.log(skill1.offsetLeft);
}, 3000)

setInterval(function() {
    skill2.forEach(ele => {
        pointRandom1 = Math.random() * 99;
        pointRandom2 = Math.random() * 99;
        if(ele.offsetTop == 0){
            ele.style.left = pointRandom1 + '%';
            ele.style.top = 98 + '%';
        }else {
            ele.style.left = pointRandom2 + '%';
            ele.style.top = 0 + 'px';
        }
    })

    // console.log(skill1.offsetLeft);
}, 3000)



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
    if((checkCham3<checkCham1) && (checkCham4<checkCham2))alert('gameOver')
}
    // console.log(widthSkill);
    // console.log(heightSkill);
    // console.log(champion.offsetWidth/2);
    // console.log(champion.offsetHeight/2);
    // console.log(checkCham1);
    // console.log(checkCham2);
    // console.log(checkCham3);

})

