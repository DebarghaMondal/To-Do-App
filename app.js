let todoContainer = document.querySelector('#todo');

let addTaskBtn = document.querySelector('#addTask');

let count = 1;
addTaskBtn.addEventListener("click", () => {
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.innerText = "new task";
    card.id = `task-${count++}`;
    card.setAttribute("contenteditable", true);
    //make draggable
    card.setAttribute("draggable", true);
    todoContainer.append(card)

    card.addEventListener("click", (e) => {
        let targetCard = e.target;
        if (targetCard.innerText == "new task") {
            targetCard.innerText = "";
        }

    })

    card.addEventListener("blur", (e) => {
        if (card.innerText.trim() == "") {
            card.remove();
        }

    })


    card.addEventListener("dragstart", (e) => {
        card.style.opacity = 0.1;

        e.dataTransfer.setData('text', card.id)
    })


    card.addEventListener("dragend", () => {
        card.style.opacity = 1;
    })

    let dragEvent = ['dragover', 'dragenter', 'drop'];

    for (let drag of dragEvent) {

        let columns = document.querySelectorAll(".column");

        for (let col of columns) {
            col.addEventListener(drag, (e) => {
                e.preventDefault();



                if (drag == "drop") {
                    let cardId = e.dataTransfer.getData('text');
                    let taretCard = document.getElementById(cardId)
                    col.append(taretCard)
                }
            })
        }
    }


});