//* ==========================================
/* ==========================================
   INFINITY AI - SCRIPT.JS
   PART 1
========================================== */

// Live Digital Clock

function updateClock() {

const now = new Date();

let hours = now.getHours();

let minutes = now.getMinutes();

let seconds = now.getSeconds();

hours = hours < 10 ? "0" + hours : hours;

minutes = minutes < 10 ? "0" + minutes : minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

const clock = document.getElementById("clock");

if(clock){

clock.innerHTML = hours + ":" + minutes + ":" + seconds;

}

}

setInterval(updateClock,1000);

updateClock();


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach((el)=>{

observer.observe(el);

});


// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});Enter   INFINITY AI - SCRIPT.JS
   PART 1
========================================== */

// Live Digital Clock

function updateClock() {

const now = new Date();

let hours = now.getHours();

let minutes = now.getMinutes();

let seconds = now.getSeconds();

hours = hours < 10 ? "0" + hours : hours;

minutes = minutes < 10 ? "0" + minutes : minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

const clock = document.getElementById("clock");

if(clock){

clock.innerHTML = hours + ":" + minutes + ":" + seconds;

}

}

setInterval(updateClock,1000);

updateClock();


// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach((el)=>{

observer.observe(el);

});


// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});Entervior:"smooth"


});/* ==========================================
   SCRIPT.JS - PART 2
========================================== */

// Dark / Light Mode

const themeBtn = document.getElementById("themeToggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

localStorage.setItem(

"theme",

document.body.classList.contains("light-mode")

? "light"

: "dark"

);

});

}

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode");

}


// Save Notes

const notes = document.getElementById("notes");

if(notes){

notes.value = localStorage.getItem("notes") || "";

notes.addEventListener("input",()=>{

localStorage.setItem("notes",notes.value);

});

}


// Study Planner

const plannerForm = document.getElementById("plannerForm");

if(plannerForm){

plannerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const task = document.getElementById("task").value;

const list = document.getElementById("taskList");

const li = document.createElement("li");

li.textContent = task;

list.appendChild(li);

plannerForm.reset();
  /* ==========================================
   SCRIPT.JS - PART 3 (FINAL)
========================================== */

// Pomodoro Timer

let timer;
let totalSeconds = 25 * 60;
let running = false;

function updateTimer() {
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;

    const display = document.getElementById("timer");

    if (display) {
        display.innerHTML =
            String(min).padStart(2, "0") +
            ":" +
            String(sec).padStart(2, "0");
    }

    if (totalSeconds <= 0) {
        clearInterval(timer);
        running = false;
        alert("🎉 Study session completed!");
        return;
    }

    totalSeconds--;
}

function startPomodoro() {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function resetPomodoro() {
    clearInterval(timer);
    running = false;
    totalSeconds = 25 * 60;
    updateTimer();
}

updateTimer();


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const update = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 30);

        } else {

            counter.innerText = target;

        }

    };

    update();

});


// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


// Footer Year

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("Infinity AI loaded successfully.");
  

});

  }

});

});
