let games = [
    { title: 'Каркассон', players: '4', borrower: null },
    { title: 'Доббль', players: '6', borrower: 'Аня' },
    { title: 'Шахматы', players: '2', borrower: null },
];


const borrowButton = document.getElementById('borrowButton');
const returnButton = document.getElementById('returnButton');
const gameSelect = document.getElementById('gameSelect');
const gameList = document.getElementById('gameList');
const borrowerName = document.getElementById('borrowerName');
const message = document.getElementById('message');
const gameSelectVal = Number(gameSelect.value.trim());
const freeGame = document.getElementById('freeGame');
const NameGame = document.getElementById('NameGame');
const PlayerGame = document.getElementById('PlayersGame');
const addGame = document.getElementById('addGame');

renderGames();

addGame.addEventListener('click', () => {
    addGameFunc();
    renderGames();
});

borrowButton.addEventListener('click', () => {
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
    else if (games[gameSelectVal].borrower !== null) {
        message.innerHTML = `Игра уже выдана: ${games[gameSelectVal].borrower}`
    }
});
returnButton.addEventListener('click', () => {
    games[gameSelectVal];

    if (games[gameSelectVal].borrower !== null) {
        message.innerHTML = 'Игра возвращена';
        games[gameSelectVal].borrower = null;
        renderGames();
    }
    else if (game[gameSelectVal.borrower == null]) {
        message.innerHTML = 'Игра уже свободна'
    }
});

freeGame.addEventListener('change', () => {
    if (freeGame.checked) {
        renderGames();
    }
    else {
        renderGames();
    }
});

function renderGames() {
    gameList.innerHTML = '';
    if (freeGame.checked) {

        games.forEach((freeGames, index) => {
            if (games[index].borrower === null) {
                const item = document.createElement('li');
                item.className = 'item';

                const div = document.createElement('div');
                div.className = 'div';

                const title = document.createElement('h1');
                title.className = 'title';
                title.textContent = games[index].title;

                const players = document.createElement('p');
                players.className = 'players'
                players.textContent = games[index].players;

                const borrower = document.createElement('p')
                borrower.className = 'borrower'
                borrower.textContent = games[index].borrower;


                div.append(borrower, players, title);
                item.append(div);
                gameList.append(item);
            }
            else {
                message.innerHTML = 'Свободных игр пока нет';
            }
        });
    }
    else {
        games.forEach((game, index) => {
            const item = document.createElement('li');
            item.className = 'item';

            const div = document.createElement('div');
            div.className = 'div';

            const title = document.createElement('h1');
            title.className = 'title';
            title.textContent = games[index].title;

            const players = document.createElement('p');
            players.className = 'players'
            players.textContent = games[index].players;

            const borrower = document.createElement('p')
            borrower.className = 'borrower'
            borrower.textContent = games[index].borrower;


            div.append(borrower, players, title);
            item.append(div);
            gameList.append(item);
        });
    }
}

renderGames();


function addGameFunc() {
    const NameGameVal = NameGame.value.trim();
    const PlayerGameVal = Number(PlayerGame.value.trim());
    games.push({
        title: NameGameVal,
        players: PlayerGameVal,
        borrower: null,
    })
};