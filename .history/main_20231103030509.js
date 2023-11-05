window.addEventListener("load", function() {
    function convertDecimalToBinary(number) {
        let numberChange = number;
        while(numberChange/2 != 0) {
            numberChange = numberChange / 2
        }
    }


    const form = document.querySelector(".form")
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const input = this.elements["numberInput"].value
        console.log(input)
    })
})