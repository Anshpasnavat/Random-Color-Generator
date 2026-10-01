const colorCode = document.querySelector("#colorCode");
const generateButton = document.querySelector("#generate");
const characters = "0123456789ABCDEF";

generateButton.addEventListener("click", function(){
    let color = "#";
    for(let i = 0;i<6;i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        color += randomCharacter;
    }
    colorCode.textContent = color;
    document.body.style.backgroundColor = color;
});