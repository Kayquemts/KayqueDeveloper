//animação botões 
const button1 = document.querySelector('.likendi');
button1.addEventListener('click', (e) => {
    e.preventDefault();
    button1.classList.add('btn--clicked');
    document.querySelectorAll('span').forEach((element) => { element.classList.add('expanded') })
    setTimeout(() => { button1.classList.remove("btn--clicked"); window.open("https://www.linkedin.com/in/kayque-mateus-998b9b22a/"); }, 1500);
    setTimeout(() => { document.querySelectorAll('span').forEach((element) => { element.classList.remove('expanded') }) }, 1700)
});

const button2 = document.querySelector('.github');
button2.addEventListener('click', (e) => {
    e.preventDefault();
    button2.classList.add('btn--clicked');
    document.querySelectorAll('span').forEach((element) => { element.classList.add('expanded') })
    setTimeout(() => { button2.classList.remove("btn--clicked"); window.open("https://github.com/Kayquemts"); }, 1500);
    setTimeout(() => { document.querySelectorAll('span').forEach((element) => { element.classList.remove('expanded') }) }, 1700)
});

