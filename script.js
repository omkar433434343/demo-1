document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed.");

    const para = document.createElement("p");
    para.textContent = "This paragraph was added by JavaScript!";
    para.style.color = "blue";
    document.body.appendChild(para);

    const button = document.getElementById("changeTextBtn");
    button.addEventListener("click", function () {
        para.textContent = "You clicked the button!";
        para.style.color = "green";
    });
});
