let items = [];

function addItem(event) {

    const btn = event.target;
    const section = btn.closest(".list-Sections");

    const input = section.querySelector(".item");
    const ul = section.querySelector(".item-list");
    const itemName = input.value.trim();


    const inputs = section.querySelector(".inputs");


    if (itemName) {
        const li = document.createElement("li");
        li.textContent = itemName;


        
        li.addEventListener("click", () => {
        li.classList.toggle("purchased");
        });
        
        items.push(li);
        ul.appendChild(li);
        ul.appendChild(inputs);
        input.value = "";
    }
    console.log(items);
    filter();
}




function filter(event){
    
    let value = Number(document.getElementById("filter").value);

    console.log(value);

    if(value === 1){  
        for(let i = 0;i< items.length;i++){
            let item = items[i];
            if(!item.classList.contains("purchased")){
                items[i].style.visibility = "hidden";
            }
            else if(item.classList.contains("purchased")){
                items[i].style.visibility = "visible";  
            }
        }
    }
    else if(value === 2){  
        for(let i = 0;i< items.length;i++){
            let item = items[i];
            if(item.classList.contains("purchased")){
                items[i].style.visibility = "hidden";
            }
            else if(!item.classList.contains("purchased")){
                items[i].style.visibility = "visible";  
            }
        }
    }
    else if(value === 0){
        for(let i = 0;i< items.length;i++){
            items[i].style.visibility = "visible";
        }
    }
}