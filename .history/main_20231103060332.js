window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let binary = [];
        while(number > 0) {
            let number1 = number % 2;
            number = Math.floor(number / 2);
            binary.unshift(number1);
        }
        return binary;
    }
    console.log(convertDecimalToBinary(1))
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = this.elements["numberInput"].value;
        console.log(input);
    });
});
