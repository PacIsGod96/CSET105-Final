let items = []; // a variable that creates an empty array to store the list items


    document.addEventListener('DOMContentLoaded', () => { //waits until the webpage is loaded before running the code
    document.querySelectorAll('.item').forEach(input => { //selects all of the item classes/input boxes
        input.addEventListener('keydown', function(event) { //adds an event listener to each input box that listens for a key press
            if (event.key === 'Enter') { //runs when the hey the was pressed was the "enter" key
                const button = input.closest('.inputs').querySelector('.add-To-List'); //a variable that finds the button with that add to list class that is in the same section as the current input
                button.click(); //simulates a click on the button to add the item
            }
        });
    });
});

function addItem(event) { //function that runs when the add to list button is clicked 

    const btn = event.target; //a variable that gets the button that was clicked
    const section = btn.closest(".list-Sections"); //a variable that gets the nearest section ffor this button 

    const input = section.querySelector(".item"); //a variable that that finds the input box 
    const ul = section.querySelector(".item-list"); //a variable that that grabs the unordered list in the section 
    const itemName = input.value.trim(); //a variable that gets the text from the input box and then removes any extra space


    const inputs = section.querySelector(".inputs"); //a variable that finds the div that contains the input and the buton 


    if (itemName) { //will check if the input is not empty 
        const li = document.createElement("li"); //creates a new list item element 
        li.textContent = itemName; //sets the text of the new list item to whatever the user typed

        let clickCount = 0; //a variable that will track for tripple clicks 
        let clickTimer; //a empty variable for the clickTimer

        li.addEventListener("click", () => { //add a click event to the list item 
            clickCount++; //adds one to the click counter
            if (clickCount === 3) { //will run if the click count is equal to 3
                clearTimeout(clickTimer); //will stop the rest timer 
                clickCount = 0; //resets he counter to 0
                li.remove(); //removes the list item from the list
            } else { //will run if the clickcount is not equal to 0
                clearTimeout(clickTimer); //cancels any previous timer that was waiting to reset the click counter 
                clickTimer = setTimeout(() => { //starts a new timer that will reset click count back to 0 after 600 milliseconds
                    clickCount = 0; //resets the click count to 0
                }, 600); // sets how long the program waits for more clicks before resetting
            }
        });


        
        li.addEventListener("click", () => { //when an item is clicked once
        li.classList.toggle("purchased"); //will toggle the "purchased" class
        });

        li.addEventListener("dblclick", () => { //when an item is double clicked 
            editItem(li); //allow user to edit the text
        });


        
        items.push(li); //adds a new list item to the global array of items
        ul.appendChild(li); //add the list item to the ul on the page
        ul.appendChild(inputs); //moves the input and button back under the list 
        input.value = ""; //clears the input box after adding item 
        input.focus(); //focuses the cursor back on the input box
    }
    filter(); //runs the focus function 
}




function filter(event){ //a function that filters the list based on dropdown or selcted value
    
    let value = Number(document.getElementById("filter").value); //a variable that will get the number value from the filter

    if(value === 1){  //will run if the filter value is equal to 1
        for(let i = 0;i< items.length;i++){ //for loop that will go through each item
            let item = items[i]; //a variable that gets the current index in the items array
            if(!item.classList.contains("purchased")){ //runs if the item was not purchased
                items[i].style.display = "none"; //will makes all of the items that werent purchased disappear
            }
            else if(item.classList.contains("purchased")){ //will run if the item was purchaed
                items[i].style.display = "block"; //will display all of the items that were purchased
            }
        }
    }
    else if(value === 2){ //will rin if the filter value is equal to 2
        for(let i = 0;i< items.length;i++){ //for loop that will go through each item
            let item = items[i]; //a variable that gets the current index in the items array
            if(item.classList.contains("purchased")){ //will run if the item was purchaed
                items[i].style.display = "none"; //will makes all of the items that were purchased disappear
            }
            else if(!item.classList.contains("purchased")){ //runs if the item was not purchased
                items[i].style.display = "block"; //will display all of the items that werent purchased
            }
        }
    }
    else if(value === 0){ //will run if the filter value is equal to 0
        for(let i = 0;i< items.length;i++){ //for loop that will go through each item
            items[i].style.display = "block"; //will display all of the items that werent purchased and were purchased
        }
    }
}

function editItem(li) { //a function that will edit and existing list item
    const currentText = li.textContent; //a variable that gets the current text of the item 
    const input = document.createElement("input"); //a variable that will create a new input box for editing
    input.type = "text"; //sets the type of input to "text"
    input.value = currentText; //sets the value of the input to the current text
    input.className = "edit-input"; //gives the input to CSS 

    li.textContent = ""; //clears the list item 
    li.appendChild(input); //puts the item inside of the list 
    input.focus(); //focuses on the new input box 

    input.addEventListener("blur", () => { //when the user clicks away from the input 
        const newText = input.value.trim(); //get the new text 
        li.textContent = newText || currentText; //if the new text is empty, keep the old one 
    });

    input.addEventListener("keydown", (e) => { //if the user presses "enter",finsh editing 
        if (e.key === "Enter") { //runs if the key that was pressed was the "enter" key
            input.blur(); //triggers blur to save the edit 
        }
    });
}