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
        return binary.join(""); // 8.625 (10) -> 1000.101 (2)
    }

    function convertDecimalToOctal(number) {
        let binary = [];
        let integerPart = Math.floor(number); // làm tròn xuống
        let decimalPart = number - integerPart;

        while (integerPart > 0) {
            let number1 = integerPart % 8;
            binary.unshift(number1);
            integerPart = Math.floor(integerPart / 8);
        }
        if (decimalPart > 0) {
            binary.push(".");

            let min = 0;
            let max = 16;
            while (decimalPart > 0 && min < max) {
                decimalPart = decimalPart * 8;
                let digit = Math.floor(decimalPart);
                binary.push(digit);
                decimalPart = decimalPart - digit;
                min++;
            }
        }
        return binary.join(""); // 11.25 (10) -> 13.2 (8)
    }
    const result = document.querySelector(".result__inner");
    const result2 = document.querySelector(".result__inner.inner-2");
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = parseFloat(this.elements["numberInput"].value);
        result.textContent = convertDecimalToBinary(input);
        result2.textContent = convertDecimalToOctal(input);
    });

    const list = document.querySelector(".list");
    const rowType = document.querySelector(".row__type.type-2");
    const rowTextTop = document.querySelector(".row__text.text-2")
    console.log(rowTextTop)
    rowType.addEventListener("click", function (e) {
        const text = e.target.querySelector(".row__text");
        list.classList.toggle("visible");
        list.classList.toggle("hidden");
    });
    const listItem = document.querySelectorAll(".list__item");
    [...listItem].forEach((item) =>
        item.addEventListener("click", function (e) {
            const text = e.target.querySelector(".row__text").textContent;
            console.log(text);
            rowTextTop.textContent = text;
        })
    );
});
