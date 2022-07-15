// function pintar(){
//         ele = document.getElementById("ele1")
//         ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

// 1- Primera modificación: (elemento clickeado como argumento)
// function pintar(element){
//       element.style.backgroundColor = 'yellow'
// }
//  let ele = document.getElementById("ele1")
//  ele.addEventListener("click",() => { 
//       pintar(ele)
// });
      
// 2- Segunda modificación: (función con argumento color)
function pintar( element , color='green'){
      element.style.backgroundColor = color
    }
let ele = document.getElementById("ele1")
ele.addEventListener("click", () => {
      pintar(ele, 'yellow')
});



