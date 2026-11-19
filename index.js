let games = [
    { title: 'Каркассон', players: '4', borrower: [], quantity: 4, },
    { title: 'Доббль', players: '6', borrower: ['Аня'], quantity: 3 },
    { title: 'Шахматы', players: '2', borrower: [], quantity: 5 },
];



const borrowButton = document.getElementById('borrowButton');
const returnButton = document.getElementById('returnButton');
const gameSelect = document.getElementById('gameSelect');
const gameList = document.getElementById('gameList');
const borrowerName = document.getElementById('borrowerName');
const message = document.getElementById('message');
const freeGame = document.getElementById('freeGame');
const NameGame = document.getElementById('NameGame');
const PlayerGame = document.getElementById('PlayersGame');
const addGame = document.getElementById('addGame');
const QuantityGame = document.getElementById('QuantityGame');
const redactQuantity = document.getElementById('redactQuantity');
const newQuantity = document.getElementById('NewQuantity');



renderGames();
renderOptions();





addGame.addEventListener('click', () => {
    addGameFunc();
    renderGames();
    renderOptions();
});

newQuantity.addEventListener('click', () => {
    const gameSelectVal = +gameSelect.value
    const redactQuantityVal = Number(redactQuantity.value);

    if (isNaN(redactQuantityVal) || redactQuantityVal <= 0) {
        alert('Введите число от 1');
        return;
    }

    games[gameSelectVal].quantity += redactQuantityVal;
    renderGames()
});


borrowButton.addEventListener('click', () => {
    const borrowerNameVal = borrowerName.value.trim();
    const gameSelectVal = +gameSelect.value
    if (games[gameSelectVal].quantity <= 0) {
        message.innerHTML = 'Все игры уже заняты';
        return;
    }

    if (borrowerNameVal == null) {
        message.innerHTML = 'Введите имя'
        return;
    }

    games[gameSelectVal].borrower.push(borrowerNameVal);
    message.innerHTML = `Игра выдана: ${borrowerNameVal}`
    games[gameSelectVal].quantity -= 1;
    renderGames();
});


returnButton.addEventListener('click', () => {
    const borrowerNameVal = borrowerName.value.trim();
    const gameSelectVal = +gameSelect.value

    if (borrowerNameVal == null) {
        message.innerHTML = 'Введите имя пользователя'
        return;
    }
    if (games[gameSelectVal.QuantityGameVal < 0]) {
        message.innerHTML = 'Игра уже свободна';
        return;
    }

    const index = games[gameSelectVal].borrower.findIndex(x => x === borrowerNameVal);
    if (index >= 0) {
        games[gameSelectVal].quantity += 1;
        message.innerHTML = 'Игра возвращена';
        games[gameSelectVal].borrower.splice(index, 1);
    }
    else {
        message.innerHTML = 'Этот человек не брал эту игру';
    }

    renderGames()

});


freeGame.addEventListener('change', () => {
    renderGames();
});

function renderGames() {
    gameList.innerHTML = '';
    if (freeGame.checked) {

        games.forEach((freeGames, index) => {
            if (games[index].quantity <= 0) {
                message.innerHTML = 'Свободных игр пока нет';
                return;
            }

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
            borrower.textContent += games[index].borrower.join(', ');

            const quantityGames = document.createElement('p');
            quantityGames.className = 'quantity';
            quantityGames.textContent = ` Всего игр: ${games[index].quantity}`;

            const giveGame = document.createElement('p');
            giveGame.className = 'giveGame';
            giveGame.textContent = `Выдано: ${games[index].borrower.length}`;


            div.append(title, players, quantityGames, borrower, giveGame);
            item.append(div);

            gameList.append(item);

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
            if (game.borrower) {
                console.log(game.borrower)
                borrower.textContent = game.borrower.join(', ');
            }

            const players = document.createElement('p');
            players.className = 'players'
            players.textContent = `Игроки: ${games[index].players}`;

            const quantityGames = document.createElement('p');
            quantityGames.className = 'quantity';
            quantityGames.textContent = `Всего игр: ${games[index].quantity}`;

            const giveGame = document.createElement('p');
            giveGame.className = 'giveGame';
            giveGame.textContent = `Выдано: ${games[index].borrower.length}`;

            div.append(title, players, quantityGames, borrower, giveGame);
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
        alert('Введите кол-во экземпляров от 1');
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
    gameSelect.innerHTML = '';

    games.forEach((element, index) => {

        const optionElem = document.createElement('option');
        optionElem.className = 'option';
        optionElem.textContent = games[index].title;
        optionElem.value = "" + index
        console.log(optionElem.value)

        gameSelect.append(optionElem);
    });
};
