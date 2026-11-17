const games = [
    { title: 'Каркассон', plaers: '4', borrower: null },
    { title: 'Доббль', plaers: '6', borrower: 'Аня' },
    { title: 'Шахматы', plaers: '2', borrower: null },
];

const borrowButton = document.getElementById('borrowButton');
const returnButton = document.getElementById('returnButton');
const gameSelect = document.getElementById('gameSelect');
const gameList = document.getElementById('gameList');
const borrowerName = document.getElementById('borrowerName');
const message = document.getElementById('message');


borrowButton.addEventListener('click', () => {
    const gameSelectVal = Number(gameSelect.value.trim());
    const borrowerNameVal = borrowerName.value.trim();

    games[gameSelectVal];

    if (borrowerNameVal == null) {
        message.innerHTML = 'Введите имя'
    }
    else if (games[gameSelectVal].borrower == null) {
        games[gameSelectVal].borrower = borrowerNameVal;
        message.innerHTML = `Игра выдана: ${borrowerNameVal}`
        renderGames();
    }
    else if(games[gameSelectVal].borrower !== null){
        message.innerHTML = `Игра уже выдана: ${games[gameSelectVal].borrower}`
    }
});
returnButton.addEventListener('click', () => {
    const gameSelectVal = Number(gameSelect.value);
    games[gameSelectVal];

    if(games[gameSelectVal].borrower !== null){
        message.innerHTML = 'Игра возвращена';
        games[gameSelectVal].borrower = null;
        renderGames();
    }
    else if(game)
});


function renderGames() {
    gameList.innerHTML = '';

    gameList.forEach((game, index) => {
        const item = document.createElement('li');
        item.className = 'item';

        const div = document.createElement('div');
        div.className = 'div';

        const title = document.createElement('h1');
        title.className = 'title';

        const players = document.createElement('p');
        players.className = 'players'

        const borrower = document.createElement('p')
        borrower.className = 'borrower'

        div.append(borrower, players, title);
        item.append(div);
    });


}