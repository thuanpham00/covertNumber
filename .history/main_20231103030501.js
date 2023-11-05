window.addEventListener("load", function() {
    function convertDecimalToBinary(number) {
        let numberChange = number;
        while(numberChange/2 != 0) {
            numberChange = numb
        }
    }


    const form = document.querySelector(".form")
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const input = this.elements["numberInput"].value
        console.log(input)
    })
})