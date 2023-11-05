window.addEventListener("load", function() {
    function convertDecimalToBinary(number) {
        while(number/2 != 0) {
            let numberChange = number;
            numberChange = numberChange / 2;
            
        }
    }


    const form = document.querySelector(".form")
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const input = this.elements["numberInput"].value
        console.log(input)
    })
})