document.addEventListener("click", e => {
    if (!e.target.matches(".expand-button")) return
    const card = e.target.closest(".card")
    const tog = card.querySelector(".card-body").classList.toggle("show")
    e.target.innerText = tog ? "Collapse" : "Expand"
})