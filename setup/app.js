const URL = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');
const content = document.querySelector('.content');


btn.addEventListener('click', () => {
    fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response));
});

function displayData(data){
    img.classList.add('shake-img');
            const {value: joke} = data;
            content.textContent = joke;
            const random = Math.random() * 1000;
            setTimeout(() => {
                img.classList.remove('shake-img');
            }, random)
}