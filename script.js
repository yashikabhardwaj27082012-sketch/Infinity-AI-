/// ---------- TO-DO LIST ----------

// ---------- TO-DO LIST ----------

function addTask(){

const input=document.getElementById("taskInput");

const text=input.value.trim();

if(text==="") return;

const li=document.createElement("li");

li.innerHTML=`
${text}
<button onclick="this.parentElement.remove()">❌</button>
`;

document.getElementById("taskList").appendChild(li);

saveTasks();

input.value="";

}

function saveTasks(){

localStorage.setItem(
"tasks",
document.getElementById("taskList").innerHTML
);

}

window.onload=function(){

if(localStorage.getItem("tasks")){

document.getElementById("taskList").innerHTML=
localStorage.getItem("tasks");

}

const note=document.getElementById("notes");

if(note){

note.value=localStorage.getItem("notes")||"";

note.addEventListener("input",()=>Enterfunction addTask(){

const input=document.getElementById("taskInput");

const text=input.value.trim();

if(text==="") return;

const li=document.createElement("li");

li.innerHTML=`
${text}
<button onclick="this.parentElement.remove()">❌</button>
`;

document.getElementById("taskList").appendChild(li);

saveTasks();

input.value="";

}

function saveTasks(){

localStorage.setItem(
"tasks",
document.getElementById("taskList").innerHTML
);

}

window.onload=function(){

if(localStorage.getItem("tasks")){

document.getElementById("taskList").innerHTML=
localStorage.getItem("tasks");

}

const note=document.getElementById("notes");

if(note){

note.value=localStorage.getItem("notes")||"";

note.addEventListener("input",()=>Enterer("input",()=>
