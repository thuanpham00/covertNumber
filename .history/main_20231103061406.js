window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let binary = [];
        while(number > 0) {
            let number1 = number % 2;
            binary.unshift(number1);
            number = Math.floor(number / 2);
        }
        for
        return binary;
    }
    const result = document.querySelector(".result__inner")
    console.log(convertDecimalToBinary(8))
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = this.elements["numberInput"].value;
        result.textContent = convertDecimalToBinary(input)
    });
});
