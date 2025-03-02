
const taskAssign = document.querySelectorAll(".completedBtn");
for(let comBtn of taskAssign){
    comBtn.addEventListener('click',function(){
    const amount = event.target.innerText === "Completed" ? -1 : 1;
   
    const quantityElement = document.getElementById('quantity');
    const currentQuentity = parseInt(quantityElement.innerText);
    
    const newQuantity = Math.max(0, currentQuentity + amount);
    
    quantityElement.innerText = newQuantity;
    alert('Thanks for Completing this Task');
    if(newQuantity === 0){
        alert('Congratulations! You have successfully completed all tasks assigned to you. Great work !!.')
    }
   })
}
