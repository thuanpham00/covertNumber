window.addEventListener("load", function () {
    
    console.log(convertDecimalToBinary(8))
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = this.elements["numberInput"].value;
        console.log(input);
    });
});
