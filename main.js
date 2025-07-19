function execClicked() {
    const input_text_value = document.getElementById("input_text").value;
    document.getElementById("output_paragraph").innerHTML = eval(input_text_value);
}

function resetInput() {
    document.getElementById("input_text").value = "";
}

function isOpe(ope) {
    let ope_arr = ["+", "-", "*", "/"];
    console.log(ope_arr.includes(ope));
    return ope_arr.includes(ope);
}

document.addEventListener("DOMContentLoaded", () => {
    const input_text      = document.getElementById("input_text");
    const execButton      = document.getElementById("exec_button");
    const resetButton     = document.getElementById("reset_button");
    const operatorButtons = document.querySelectorAll(".op_button");
    const numButtons      = document.querySelectorAll(".num_button");

    // Event when execute button is clicked
    execButton.addEventListener("click", execClicked);

    // Reset the input text
    resetButton.addEventListener("click", resetInput);

    // Event when operator buttons arr clicked
    operatorButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const operator = event.target.value;
            handleOperator(operator);
        });
    });

    function handleOperator(operator) {
        let last_char = input_text.value.slice(-1);
        
        if (isOpe(last_char)){
            let new_input = input_text.value.replace(/.$/, operator);
            input_text.value = new_input;
        } else {
            input_text.value += operator;
        }

        console.log(operator);
    }

    // Event when number button are clicked
    numButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const number = event.target.value;
            handleNumber(number);
        });
    });

    function handleNumber(number) {
        input_text.value += number;
        console.log(number);
    }
});