'use strict' ;
let balance = 10000;
while (true) {
    const menu = `
    Добро пожаловать в банкомат!
    Ваш выбор:
    1. Показать баланс:
    2. Снять средства:
    3. Пополните счет:
    4. Выход
    `;

    const choise = prompt(meny);

    switch (choise) {
        case '1':
            alert(`Ваш баланс: ${balance} `);
            break;
        case '2':
            const accountTo = Number(prompt('Введите сумму для снятия'));
            if (isNaN(accountTo) || accountTo <=0) {
                alert('Ошибка: введена некоректная сумма.');
            }else if (accountTo > balance) {
                alert('Ошибка: недостаточно средств на счете');
            }else{
                balance -= accountTo;
                alert(`Сгятие успешно. Ваш баланс: ${balance} `);
                break
            }
            case '2':
            alert(`Ваш баланс: ${balance} `);
            break;
        case '2':
            const accountToDeposit = Number(prompt('Введите сумму для снятия'));
            if (isNaN(accountToDeposit) || accountToDeposit <=0) {
                alert('Ошибка: введена неккоректная сумма.');
            
            }else{
                balance =- accountToDeposit;
                alert(`Счет пополнен. Ваш баланс: ${balance} `);
                break;
            }

    }
     
}