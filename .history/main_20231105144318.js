window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let arr = [];
        arr.push(number);
        const stringArray = arr.join();
        const length = arr.join().length;
        for (let i = 0; i < length; i++) {
            if (stringArray[i - 1] == "." && stringArray[i] != ".") {
                const a = stringArray.slice(0, i - 1); // truyền chỉ số index // not to truyền giá trí chỉ số
                // console.log(a); // start : 0 ; end : nhớ trừ 1
                const b = number - a;
                const aConvert = +a; // convert string to number
                console.log(b);

                let binary = [];
                while (a > 0) {
                    let number1 = a % 2;
                    binary.unshift(number1);
                    a = Math.floor(a / 2);
                }
                return binary.join("");
            }
        }
    }
    convertDecimalToBinary(81.625);
    // const result = document.querySelector(".result__inner");
    // const form = document.querySelector(".form");
    // form.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     const input = this.elements["numberInput"].value;
    //     result.textContent = convertDecimalToBinary(input);
    // });
});
