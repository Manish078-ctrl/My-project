let currentDisplay = '';
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentDisplay = '';
    } else if (value === '←') {
      currentDisplay = currentDisplay.slice(0, -1);
    } else if (value === '=') {
      try {
        currentDisplay = eval(currentDisplay).toString();
      } catch {
        currentDisplay = 'Error';
      }
    } else {
      currentDisplay += value;
    }

    display.value = currentDisplay;
  });
});
