"use strict";
// Variable Decleration:
const addme = document.querySelector(".add-me");
const display = document.querySelector(".task-display");
const clear = document.querySelector(".clear");
let task = document.getElementById("task");
// Array decleration:
let tasks = new Array();

// Task input event listener:
addme.addEventListener("click", function () {
    if (task.value === "") {
      addme.classList.add("animate__shakeX");
      setTimeout(function () {
        addme.classList.remove("animate__shakeX");
      }, 1000);
    } else {
      tasks.push(task.value);
      addtask(tasks.lastIndexOf(task.value));
      task.value = "";
    }
  });

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addme.click();
    }
  });

// Clear tasks event listener:
clear.addEventListener("click", function () {
    display.innerHTML = "";
  });

// Add task function:
function addtask(i) {
    display.insertAdjacentHTML(
      "beforeend",
      `<div class="task-block incomplete" id="block-${i}">
    <p>${tasks[i]}</p>
    <div class="options">
      <button class="check"  onClick="checktask(${i})" >
        <ion-icon name="checkmark-circle" class="check check-${i}"></ion-icon>
      </button>
      <button class="delete" onClick="removetask(${i})">
        <ion-icon name="trash" class="delete"></ion-icon>
      </button>
    </div>
  </div>`
    );
  }




























