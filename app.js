// app.js
document.addEventListener('DOMContentLoaded', function () {
    const button = document.createElement('button');
    button.textContent = 'Change Background Color';
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33B0', '#33C3FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
