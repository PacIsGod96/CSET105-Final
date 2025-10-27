let items = [];


    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.item').forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const button = input.closest('.inputs').querySelector('.add-To-List');
                button.click();
            }
        });
    });
});

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

        let clickCount = 0;
        let clickTimer;

        li.addEventListener("click", () => {
            clickCount++;
            if (clickCount === 3) {
                clearTimeout(clickTimer);
                clickCount = 0;
                li.remove();
            } else {
                clearTimeout(clickTimer);
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 600); // Adjust timing as needed
            }
        });


        
        li.addEventListener("click", () => {
        li.classList.toggle("purchased");
        });

        li.addEventListener("dblclick", () => {
            editItem(li);
        });


        
        items.push(li);
        ul.appendChild(li);
        ul.appendChild(inputs);
        input.value = "";
        input.focus();
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
                items[i].style.display = "none";
            }
            else if(item.classList.contains("purchased")){
                items[i].style.display = "block";  
            }
        }
    }
    else if(value === 2){  
        for(let i = 0;i< items.length;i++){
            let item = items[i];
            if(item.classList.contains("purchased")){
                items[i].style.display = "none";
            }
            else if(!item.classList.contains("purchased")){
                items[i].style.display = "block";  
            }
        }
    }
    else if(value === 0){
        for(let i = 0;i< items.length;i++){
            items[i].style.display = "block";
        }
    }
}

function editItem(li) {
    const currentText = li.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "edit-input";

    li.textContent = "";
    li.appendChild(input);
    input.focus();

    input.addEventListener("blur", () => {
        const newText = input.value.trim();
        li.textContent = newText || currentText;
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            input.blur();
        }
    });
}