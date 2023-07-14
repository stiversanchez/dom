import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn =  document.querySelector("[data-form-btn]");

const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    console.log(checkComplete());
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);
    // task.innerHTML = content;
    /* Agregamos la function al elemento padre */
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    
}

btn.addEventListener("click",createTask);




