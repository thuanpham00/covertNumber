window.addEventListener("load", function () {
    function convertDecimalToBinary(number) {
        let arr = []
        while (number / 2 != 0) {
            let numberChange = number;
            if (numberChange % 2 == 0) {
                return "0";
            }
            number = numberChange;
        }
        arr
    }

    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = this.elements["numberInput"].value;
        console.log(input);
    });
});
