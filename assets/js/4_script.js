var colorGlobal = "";
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorGlobal = 'purple';
    } else if (event.key === 's') {
        colorGlobal = 'orange';
    }else if (event.key === 'd'){
        colorGlobal = 'black';
    }
    let box1 = document.querySelector('#box1');
    box1.addEventListener("click", ()=>{
        box1.style.backgroundColor = colorGlobal
    })
    let box2 = document.querySelector('#box2');
    box2.addEventListener("click", ()=>{
        box2.style.backgroundColor = colorGlobal
    })
    let box3 = document.querySelector('#box3');
    box3.addEventListener("click", ()=>{
        box3.style.backgroundColor = colorGlobal
    })
    let box4 = document.querySelector('#box4');
    box4.addEventListener("click", ()=>{
        box4.style.backgroundColor = colorGlobal
    })
})