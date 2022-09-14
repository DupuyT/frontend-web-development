const button = document.querySelector("#my-button");
button.addEventListener("click", () => {
    const firstTextInput = document.querySelector("#first-text-input");
    console.log(firstTextInput.value);

    const colorInput = document.querySelector("#color-input");
    const form = document.querySelector("form");
    form.style.backgroundColor = colorInput.value;

    //checkbox input
const checkboxesElement = document.querySelector("#checkboxes");
const checkboxes = checkboxesElement.querySelectorAll("input");
});