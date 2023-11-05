window.addEventListener("load", function() {
    const form = document.querySelector(".form")
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const input = this.elements["numberInput"]
        console.log(input)
    })
})