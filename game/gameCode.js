var history = []; 
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;  
}
function ansver(ans1, ans2, aans3){
    var ok = false;
    do {
    event = +prompt(ans1 + ans2 + ans3 + '-1 - Выход из игры'); 
        if (event == -1) {
        break;
        }
        else {
        ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch(event) {
        case 1: history.push([ans1, ans2]);
            break;
        case 2: history.push([ans1, ans3]);
            break;
        case -1: history.push([ans1, "Вышли из игры"]);
            break;
    }
return event;
}

switch (ansver(works.a00, works.a1, works.a2)) {
    case 1: 
        switch (ansver(works.b00, works.b1, works.b2)) {
            case 1: 
            case 2:
                ansver(works.d00, works.d1, works.d2);
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: 
        switch (ansver(works.c00, works.c1, works.c2)) {
            case 1: 
            case 2: 
                ansver(works.d00, works.d1, works.d2);
                break;
            case -1: 
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: 
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(history);
var step = +prompt("введите номер хода");
var stepHistory ="В ходе № " + step + " " + history[step-1][0] + "Ваш выбор " + history[step-1][1];
alert(stepHistory);