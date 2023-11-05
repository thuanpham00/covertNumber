// // phần nguyên: integerPart
// // phần thập phân: decimalPart
window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let binary = [];
        let integerPart = Math.floor(number)
        let decimalPart = number - integerPart;
        while (integerPart > 0) {
            let number1 = integerPart % 2;
            binary.unshift(number1);
            integerPart = integerPart / 2;
        }
        if(decimalPart > 0) {
            binary.push(".")
            let min = 0 ;
            let max = 0;
            while(decimalPart > 0 && min < max) {
                decimalPart = decimalPart * 2;
                let digit = de
            }
        }
        arr.push(number);
        const stringArray = arr.join(); // nối các phần tử trong mảng thành chuỗi
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            if (stringArray[i - 1] == "." && stringArray[i] != ".") {
                const integerPart = stringArray.slice(0, i - 1);
                // truyền chỉ số index // not to truyền giá trí chỉ số // start : 0 ; end : nhớ trừ 1
                const integerPartMain = +integerPart; // convert string to number
                const decimalPart = number - integerPartMain;

                while (integerPartMain > 0) {
                    let number1 = integerPartMain % 2;
                    binary.unshift(number1);
                    integerPartMain = integerPartMain / 2;
                }
                // 8.625
                // 8 -> 1000
                // 0.625
                // 1000.1
                let min = 0;
                let max = 16;
                if (decimalPart > 0) {
                    binary.push(".");

                    while (decimalPart > 0 && min < max) {
                        decimalPart = decimalPart * 2;
                        let digit = Math.floor(decimalPart);
                        binary.push(digit);
                        decimalPart = decimalPart - digit;
                        min++;
                    }
                }
            } else if (stringArray[i] != ".") {
                while (number > 0) {
                    let number1 = number % 2;
                    binary.unshift(number1);
                    number = Math.floor(number / 2);
                }
            }
        }
        return binary.join("");
    }
    // convertDecimalToBinary(81.625);
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
