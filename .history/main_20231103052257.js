window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let binary = [];
        while(number > 0) {
            let number1 = number % 2;
            binary.unshift(number1)
        }
    }

    console.log(convertDecimalToBinary(8))
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = this.elements["numberInput"].value;
        console.log(input);
    });
});
