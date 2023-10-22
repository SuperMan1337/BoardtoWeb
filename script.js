const rows = document.querySelectorAll('.square > div');

rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll('.cell');

    cells.forEach((cell, index) => {
        if ((rowIndex + index) % 2 === 0) {
            cell.classList.add('yellow');
        } else {
            cell.classList.add('black');
        }
    });
});


// Легенда
const legend = document.createElement('div');
legend.classList.add('legend');
document.body.appendChild(legend);


const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const numbersR = ['8', '7', '6', '5', '4', '3', '2', '1'];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const lettersUp = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];

// Контейнер лівих цифр
const leftNumbers = document.createElement('div');
leftNumbers.classList.add('left-numbers');
legend.appendChild(leftNumbers);

// Контейнер правих цифр
const rightNumbers = document.createElement('div');
rightNumbers.classList.add('right-numbersR');
legend.appendChild(rightNumbers);

// Контейнер верхніх букв
const topLetters = document.createElement('div');
topLetters.classList.add('top-lettersUp');
legend.appendChild(topLetters);

// Контейнер нижніх букв
const bottomLetters = document.createElement('div');
bottomLetters.classList.add('bottom-letters');
legend.appendChild(bottomLetters);

// Додаємо цифри та букви до контейнерів
for (let i = 0; i < 8; i++) {
    const leftNumberDiv = document.createElement('div');
    leftNumberDiv.textContent = numbers[i];
    leftNumbers.appendChild(leftNumberDiv);

    const rightNumberDiv = document.createElement('div');
    rightNumberDiv.textContent = numbersR[i];
    rightNumbers.appendChild(rightNumberDiv);

    const topLetterDiv = document.createElement('div');
    topLetterDiv.textContent = lettersUp[i];
    topLetters.appendChild(topLetterDiv);

    const bottomLetterDiv = document.createElement('div');
    bottomLetterDiv.textContent = letters[i];
    bottomLetters.appendChild(bottomLetterDiv);
}