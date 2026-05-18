function login(){
alert("Login Successful")
}

const search=document.getElementById("search")

if(search){
search.addEventListener("keyup",()=>{
console.log(search.value)
})
}

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

const taskForm=document.getElementById("taskForm");

if(taskForm){
 taskForm.addEventListener("submit",function(e){
 e.preventDefault();

 let task={
 customer:document.getElementById("customerName").value,
 service:document.getElementById("service").value,
 location:document.getElementById("location").value,
 budget:document.getElementById("budget").value,
 description:document.getElementById("description").value,
 status:"Open"
 }

tasks.push(task)
 localStorage.setItem("tasks",JSON.stringify(tasks))
 loadTasks()
 taskForm.reset()
 })
}

function loadTasks(){
 let taskList=document.getElementById("taskList")
 let workerTasks=document.getElementById("workerTasks")

 if(taskList){
 taskList.innerHTML=""
 tasks.forEach(task=>{
 taskList.innerHTML+=`
 <div class='card'>
 <h3>${task.service}</h3>
 <p>${task.description}</p>
 <p>${task.location}</p>
 <p>Status:${task.status}</p>
 </div>`
 })
 }

if(workerTasks){
 workerTasks.innerHTML=""
 tasks.forEach((task,index)=>{
 if(task.status==='Open'){
 workerTasks.innerHTML+=`
 <div class='worker-card'>
 <h3>${task.service}</h3>
 <p>${task.description}</p>
 <button onclick='acceptTask(${index})'>Accept Task</button>
 </div>`
 }
 })
 }
}

function acceptTask(index){
 tasks[index].status='Accepted'
 localStorage.setItem('tasks',JSON.stringify(tasks))
 loadTasks()
 alert('Task accepted')
}

loadTasks()

function login(){
 window.location='customers.html'
}
