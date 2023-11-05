// phần nguyên: integerPart
// phần thập phân: decimalPart
window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let arr = [];
        arr.push(number);
        const stringArray = arr.join();
        const length = arr.join().length;
        for (let i = 0; i < length; i++) {
            if (stringArray[i - 1] == "." && stringArray[i] != ".") {
                const integerPart = stringArray.slice(0, i - 1);
                // truyền chỉ số index // not to truyền giá trí chỉ số
                // start : 0 ; end : nhớ trừ 1
                const integerPartMain = +integerPart; // convert string to number
                const decimalPart = number - integerPartMain;

                let binary = [];
                while (integerPartMain > 0) {
                    let number1 = integerPartMain % 2;
                    binary.unshift(number1);
                    integerPartMain = Math.floor(integerPartMain / 2);
                    return binary.join("");
                }
            }
        }
    }
    // convertDecimalToBinary(81.625);
    const result = document.querySelector(".result__inner");
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = this.elements["numberInput"].value;
        result.textContent = convertDecimalToBinary(input);
    });
});
