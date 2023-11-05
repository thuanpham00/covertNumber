// // phần nguyên: integerPart
// // phần thập phân: decimalPart
window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let binary = [];
        let integerPart = Math.floor(number);
        let decimalPart = number - integerPart;

        while (integerPart > 0) {
            let number1 = integerPart % 2;
            binary.unshift(number1);
            integerPart = integerPart / 2;
        }
        if (decimalPart > 0) {
            binary.push(".");

            let min = 0;
            let max = 16;
            while (decimalPart > 0 && min < max) {
                decimalPart = decimalPart * 2;
                let digit = Math.floor(decimalPart);
                binary.push(digit);
                min++;
            }
        }
        return binary.join("");
    }
    const result = document.querySelector(".result__inner");
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = parseFloat(this.elements["numberInput"].value);
        result.textContent = convertDecimalToBinary(input);
    });
});

// window.addEventListener("load", function () {
//     function convertDecimalToBinary(number) {
//         let binary = [];
//         let integerPart = Math.floor(number);
//         let decimalPart = number - integerPart;

//         while (integerPart > 0) {
//             let remainder = integerPart % 2;
//             binary.unshift(remainder);
//             integerPart = Math.floor(integerPart / 2);
//         }

//         if (decimalPart > 0) {
//             binary.push(".");

//             let maxPrecision = 16; // Số chữ số thập phân tối đa
//             let precision = 0;

//             while (decimalPart > 0 && precision < maxPrecision) {
//                 decimalPart = decimalPart * 2;
//                 let digit = Math.floor(decimalPart);
//                 binary.push(digit);
//                 decimalPart = decimalPart - digit;
//                 precision++;
//             }
//         }

//         return binary.join("");
//     }

//     const result = document.querySelector(".result__inner");
//     const form = document.querySelector(".form");
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const input = parseFloat(this.elements["numberInput"].value);
//         result.textContent = convertDecimalToBinary(input);
//     });
// });
