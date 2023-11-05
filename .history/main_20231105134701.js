window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let arr = [];
        arr.push(number);
        const string = arr.toString();
        const length = string.length;
        for (let i = 0; i < length; i++) {
            if (string[i] == ".") {
                let a = string.slice(string[0], string[i]);
                console.log(a)
            }
        }
        // let binary = [];
        // while (number > 0) {
        //     let number1 = number % 2;
        //     binary.unshift(number1);
        //     number = Math.floor(number / 2);
        // }
        // return binary.join("");
    }
    convertDecimalToBinary(13.625);
    // const result = document.querySelector(".result__inner");
    // const form = document.querySelector(".form");
    // form.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     const input = this.elements["numberInput"].value;
    //     result.textContent = convertDecimalToBinary(input);
    // });
});
