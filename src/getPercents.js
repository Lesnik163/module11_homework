//Функция возвращает процент от числа
export function getPercents(percent, num) { 
    const percentRatio = percent / 100 ;
    let result;
    if (typeof percent === 'number' && typeof num === 'number') {
        if (percent >=0 && num >= 0) {
            result = `${percent}% от числа ${num} = ${num * percentRatio}`;
        }else{
            result = 'Нельзя использовать отрицательные значения!';
        }
    }else{
        result = 'Необходимо ввести именно число';
        }
        return result;
    }
    