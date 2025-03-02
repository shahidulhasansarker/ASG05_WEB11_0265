
const xyz = document.querySelectorAll(".completedBtn")
for(let abc of xyz){
    abc.addEventListener('click',function(){
    const history = document.getElementById('taskHistory');
    const div = document.createElement('div');
    div.innerHTML = `
    <p class="text-center font-bold mt-4">You Have Successfully Completed this important task on </br> 26 March 2025(Wednesday).</p>
    `
    history.appendChild(div)
   })
}

document.getElementById('clear').addEventListener('click', function(){
    const history = document.getElementById('taskHistory');
    const div = document.createElement('div');
    div.innerHTML = `
    <p class="text-center font-bold mt-4">Successfully History Deleted.</p>
    `
    history.appendChild(div)
})