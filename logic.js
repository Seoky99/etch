const board = document.querySelector(".board");
const width = board.offsetWidth; 
const button = document.querySelector("#cg");

function generateBoard(rowAmount) {

    for (let j=0; j<rowAmount; j++) {

        const newRow = document.createElement("div");
        newRow.setAttribute("style", "display: flex");

        for (let i=0; i<rowAmount; i++) {
            const divElt = document.createElement("div");

            divElt.classList.add("on");
            divElt.setAttribute("style", `background-color: red; width:${width/rowAmount}px; height:${width/rowAmount}px`);
            newRow.appendChild(divElt);
        }

        board.appendChild(newRow);

    }
}

function clearBoard() {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

board.addEventListener("mouseover", (e) => {
    if(e.target.className === "on") {
        e.target.style.backgroundColor = "black"}}

)

button.addEventListener("click", () => {
    clearBoard(); 
    let response = Number(prompt("Enter grid size", "32"));
    generateBoard(response);
})

generateBoard(32);