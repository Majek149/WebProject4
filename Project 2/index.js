const dialogElem = document.getElementById("dialog");

const showBtn = document.querySelector(".show");

const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", ()=> {
dialogElem.showModal();
});b

closeBtn.addEventListener("click", ()=> {
    dialogElem.close();
})