window.addEventListener("load", function() {
    const form = document.querySelector(".form")
    form.addEventListener("submit", function(e) {
        e.target.preventDefault()
        console.log(e.target.value)
    })
})