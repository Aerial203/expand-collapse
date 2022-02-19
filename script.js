const card = document.querySelectorAll(".card")

card.forEach(item => {
    item.addEventListener("click", e => {
        if (!e.target.matches(".expand-button")) return
        const content = item.querySelector(".card-body")
        e.target.innerText === "Expand" ? expand_content(content) : collapse_content(content)
        change_button_text(e.target)
    })
})

function expand_content(content) {
    content.classList.add("show")
}

function collapse_content(content) {
    content.classList.remove("show")
}

function change_button_text(button) {
    if (button.innerText === "Expand") {
        button.innerText = "Collapse"
    } else {
        button.innerText = "Expand"
    }
}