const canvas = document.getElementById("canvas");

for (let i = 1; i < 257; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
    div.addEventListener("mouseover", function(e) {
        div.classList.add("black");
    });
}

document.getElementById("clear").addEventListener("click", function(e) {
    const divClear = document.querySelectorAll("div");
    for (let i = 0; i < divClear.length; i++)
        divClear[i].classList.remove("black");
});

document.getElementById("size").addEventListener("click", function(e) {
    let newSize = prompt("Enter a number between 5 to 100 to change the pixel density. The number entered will represent both width and height.");
    document.getElementById("canvas").innerHTML = "";
    if (newSize > 4 && newSize < 101) {
        for (let i = 1; i < ((newSize*newSize) + 1); i++) {
            const div = document.createElement("div");
            div.style.width = `calc(100% * (1/${newSize}))`;
            div.style.height = `calc(400px * (1/${newSize}))`;
            canvas.appendChild(div);
            div.addEventListener("mouseover", function(e) {
                div.classList.add("black");
            });
        }
    } else {
        alert("Please enter a valid number.");
        for (let i = 1; i < 257; i++) {
            const div = document.createElement("div");
            canvas.appendChild(div);
            div.addEventListener("mouseover", function(e) {
                div.classList.add("black");
            });
        }
    }
});