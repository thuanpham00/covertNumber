window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let binary = [];
        while (number > 0) {
            let number1 = number % 2;
            binary.unshift(number1);
            number = Math.floor(number / 2);
        }
        const string = binary.toString();
        const index = string.length;
        for (let i = 1, j = 1; i < index - 1; i++) {
            if (string[i] == ",") {
                string[j++] = string[i - 1];
            } else {
                string[j++] = string[i];
            }
        }
        console.log(string);
    }
    const result = document.querySelector(".result__inner");
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = this.elements["numberInput"].value;
        result.textContent = convertDecimalToBinary(input);
    });
});
