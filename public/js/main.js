const getBridge = () => {
    return window.__gobridge__;
};
const registerCalculationListener = () => {
    const bridge = getBridge();
    const $input1 = document.getElementById('input1');
    const $input2 = document.getElementById('input2');
    const $submit = document.getElementById('submit');
    $submit.addEventListener('click', () => {
        const input1 = $input1.value;
        const input2 = $input2.value;
        const total = bridge.add(input1, input2);
        bridge.printMessage(`${input1} + ${input2} = ${total}`);
    });
};
setTimeout(registerCalculationListener, 500);
console.log('Logging');
//# sourceMappingURL=main.js.map