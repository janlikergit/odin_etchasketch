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