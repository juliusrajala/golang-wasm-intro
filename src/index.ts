
const getBridge = () => {
  return (window as any).__gobridge__;
}

const registerCalculationListener = () => {
  const bridge = getBridge();

  const $input1 = document.getElementById('input1') as HTMLInputElement;
  const $input2 = document.getElementById('input2') as HTMLInputElement;
  const $submit = document.getElementById('submit') as HTMLButtonElement;

  $submit.addEventListener('click', () => {
    const input1 = $input1.value;
    const input2 = $input2.value;
    const total = bridge.add(input1, input2);
    bridge.printMessage(`${input1} + ${input2} = ${total}`);
  })

}

// We wait a moment for the wasm to load because
// I haven't bothered to do anything about this.
setTimeout(registerCalculationListener, 500);

console.log('Logging')