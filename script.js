const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    console.log(input)
    input.addEventListener('input', () => {
        validateInput(input)
    });
});

function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}