
const taskAssign2 = document.querySelectorAll(".completedBtn");
for(let comBtn of taskAssign2){
    comBtn.addEventListener('click',function(){
    const amount = event.target.innerText === 23 ? 1 : 1;
   
    const quantityElement = document.getElementById('quantity2');
    const currentQuentity = parseInt(quantityElement.innerText);
    
    const newQuantity = Math.max(0, currentQuentity + amount);
    
    quantityElement.innerText = newQuantity;
    
   })
}