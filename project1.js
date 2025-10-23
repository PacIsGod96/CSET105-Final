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


        ul.appendChild(li);
        ul.appendChild(inputs);
        input.value = "";
    }
}