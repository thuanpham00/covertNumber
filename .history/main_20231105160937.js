// // phần nguyên: integerPart
// // phần thập phân: decimalPart
window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let binary = [];
        let integerPart = Math.floor(number); // làm tròn xuống
        let decimalPart = number - integerPart;

        while (integerPart > 0) {
            let number1 = integerPart % 2;
            binary.unshift(number1);
            integerPart = Math.floor(integerPart / 2);
        }
        if (decimalPart > 0) {
            binary.push(".");

            let min = 0;
            let max = 16;
            while (decimalPart > 0 && min < max) {
                decimalPart = decimalPart * 2;
                let digit = Math.floor(decimalPart);
                binary.push(digit);
                decimalPart = decimalPart - digit;
                min++;
            }
        }
        return binary.join(""); // 8.625 -> 1000.101
    }

    function convertDecimalToOctal(number) {
        let binary = [];
        let integerPart = Math.floor(number); // làm tròn xuống
        let decimalPart = number - integerPart;

        while (integerPart > 0) {
            let number1 = integerPart % 8;
            binary.unshift(number1);
            integerPart = Math.floor(integerPart / 2);
        }
        if (decimalPart > 0) {
            binary.push(".");

            let min = 0;
            let max = 16;
            while (decimalPart > 0 && min < max) {
                decimalPart = decimalPart * 2;
                let digit = Math.floor(decimalPart);
                binary.push(digit);
                decimalPart = decimalPart - digit;
                min++;
            }
        }
        return binary.join(""); // 
    }
    const result = document.querySelector(".result__inner");
    const result2 = document.querySelector(".result__inner.inner-2");
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = parseFloat(this.elements["numberInput"].value);
        // result.textContent = convertDecimalToBinary(input);
        result2.textContent = convertDecimalToOctal(input);
    });
});
