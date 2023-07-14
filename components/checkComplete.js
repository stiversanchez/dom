const checkComplete = ()=>{
    const i = document.createElement("i")
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",completeTask)
    return i;
}

const completeTask = (evento) =>{
    const elemento = evento.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");
}

export default checkComplete