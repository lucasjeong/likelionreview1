var totalwidth = document.querySelector('#content').offsetWidth;
var random1 = totalwidth*Math.random();
var random2 = totalwidth*Math.random();

if(random1<random2) {
    document.querySelector('#b1').style.width = random1+'px';
    document.querySelector('#b2').style.width = (totalwidth-random1-20)+'px';
    document.querySelector('#b2').style.left = (random1+20)+'px';

    document.querySelector('#b3').style.width = random2+'px';
    document.querySelector('#b4').style.width = (totalwidth-random2-20)+'px';
    document.querySelector('#b4').style.left = (random2+20)+'px';
}