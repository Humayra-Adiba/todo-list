
const selectitem = document.querySelector(".body ul");
const selectform = document.querySelector(".todo");

selectitem.addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.target.tagName === "LI"){
        if(e.target.classList.contains("done")){
            e.target.classList.remove("done");
        }
        else{
            e.target.classList.add("done");
        }
    }

    else if(e.target.classList.contains('remove')){
        e.target.parentNode.remove();
    }

});



selectform.addEventListener("submit", (e)=>{
    e.preventDefault()

    const input = e.target.task.value;

    if(validateInput(input, e.target.task)){
        selectitem.insertAdjacentElement('afterbegin',newItem(e.target.task.value));
        e.target.task.value = "";
    }

    
})


const validateInput = (input, element) =>{

    if(input){
        element.parentNode.classList.remove("error");
        return true;
    }
    else{
        element.parentNode.classList.add("error");
        return false;
    }
}



const newItem = (content) =>{
     const createItem =document.createElement('li');
     createItem.textContent = content;
     createItem.insertAdjacentElement('afterbegin',removeButton());
     return createItem;
}


const removeButton = ()=>{
    const removeBtn = document.createElement('span');
    removeBtn.classList.add('remove');
    removeBtn.textContent = "X";
    return removeBtn;
}
