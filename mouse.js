var blocks = document.querySelectorAll('.block')

function gameover(){
    alert("끝");
}

blocks.forEach(item => {
    item.addEventListener('mouseover',gameover);
})