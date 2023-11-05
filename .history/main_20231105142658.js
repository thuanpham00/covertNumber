window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let arr = [];
        arr.push(number);
        // console.log(arr);
        // console.log(arr.join());
        const stringArray = arr.join();
        const length = arr.join().length;
        for (let i = 0; i < length; i++) {
            if (stringArray[i - 1] == "." && stringArray[i] != ".") {
                const a = stringArray.slice(stringArray[0], stringArray[i - 1]);
                console.log(a);
                // console.log(stringArray[0]);
                // console.log(stringArray[1]);
                console.log(i - 1, stringArray[i - 1]);
                console.log(i, stringArray[0]);
            }
        }
        // const string = arr.toString();
        // const length = string.length;
        // console.log("Độ dài của chuỗi", length);
        // const firstChar = string[0];
        // for (let i = 0; i < length; i++) {
        //     if (string[i] == ".") {
        //         let a = string.slice(firstChar, string[i]);
        //         console.log(a);
        //         let b = string.slice(string[i + 1], string[length]);
        //         console.log(b);
        //     }
        //     // console.log(i, string[i]);
        // }
        // const animals = ["tiger", "lion", "horse", "elephant"];
        // const animals4 = animals.slice(1, 3);
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
    convertDecimalToBinary(8111.625);
    // const result = document.querySelector(".result__inner");
    // const form = document.querySelector(".form");
    // form.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     const input = this.elements["numberInput"].value;
    //     result.textContent = convertDecimalToBinary(input);
    // });
});
