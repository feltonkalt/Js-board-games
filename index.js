let games = [
    { title: 'Каркассон', players: '4', borrower: null, quantity: 4, },
    { title: 'Доббль', players: '6', borrower: 'Аня', quantity: 3 },
    { title: 'Шахматы', players: '2', borrower: null, quantity: 5 },
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
const gameSelectUl = document.getElementById('gameSelectUl');
const QuantityGame = document.getElementById('QuantityGame');



renderGames();
renderOptions();





addGame.addEventListener('click', () => {
    addGameFunc();
    renderGames();
    renderOptions();
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
                players.textContent = `Игроки: ${games[index].players}`;

                const borrower = document.createElement('p')
                borrower.className = 'borrower'
                borrower.textContent = games[index].borrower;

                const quantityGames = document.createElement('p');
                quantityGames.className = 'quantity';
                quantityGames.textContent = ` Всего игр: ${games[index].quantity}`;

                div.append(title, players, quantity, borrower);
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

            const borrower = document.createElement('p')
            borrower.className = 'borrower'
            borrower.textContent = games[index].borrower;

            const players = document.createElement('p');
            players.className = 'players'
            players.textContent = `Игроки: ${games[index].players}`;

            const quantityGames = document.createElement('p');
            quantityGames.className = 'quantity';
            quantityGames.textContent = `Всего игр: ${games[index].quantity}`;

            div.append(title, players, quantityGames, borrower);
            item.append(div);
            gameList.append(item);
        });
    }
}

renderGames();


function addGameFunc() {
    const NameGameVal = NameGame.value.trim();
    const PlayerGameVal = Number(PlayerGame.value.trim());
    const QuantityGameVal = Number(QuantityGame.value.trim());

    if (isNaN(QuantityGameVal) || QuantityGameVal <= 0) {
        alert('Введите кол-во экземпляров от 0');
        return;
    }
    if (NameGameVal === "" || PlayerGameVal === "") {
        alert('Введите что-нибудь');
        return;
    }
    if (isNaN(PlayerGameVal) || PlayerGameVal <= 0) {
        alert('Введите кол-во игроков от 1');
        return;
    }
    else {
        games.push({
            title: NameGameVal,
            players: PlayerGameVal,
            borrower: null,
            quantity: QuantityGameVal,
        })
    }


};

function renderOptions() {
    gameSelectUl.innerHTML = '';

    games.forEach((element, index) => {

        const options = document.createElement('option');
        options.className = 'option';
        options.textContent = games[index].title;
        options.value

        gameSelectUl.append(options);
    });
};
