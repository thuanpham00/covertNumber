window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let arr = [];
        arr.push(number);
        const string = arr.toString();
        const length = string.length;
        const firstChar = string[0];
        for (let i = 0; i < length; i++) {
            if (string[i] == ".") {
                let a = string.slice(string[0], string[i]);
                console.log(a);
            }
            console.log(i, string[i]);
        }
        const animals = ["tiger", "lion", "horse", "elephant"];
        const animals4 = animals.slice(1, 3);
        // ["lion", "horse"]
        // console.log(animals4);
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
