module.exports = function toReadable(givenNumber) {
    let number = +givenNumber;
    let one, ten, hundred, result;
    let arrayOfNumbers = {
        0: 'zero',
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven', 
        8: 'eight', 
        9: 'nine', 
        10: 'ten', 
        11: 'eleven', 
        12: 'twelve', 
        13: 'thirteen', 
        14: 'fourteen', 
        15: 'fifteen', 
        16: 'sixteen', 
        17: 'seventeen', 
        18: 'eighteen', 
        19: 'nineteen', 
        20: 'twenty', 
        30: 'thirty', 
        40: 'forty', 
        50: 'fifty', 
        60: 'sixty', 
        70: 'seventy', 
        80: 'eighty', 
        90: 'ninety'
    };

    if (number >= 0 && number <= 20) {
        result = arrayOfNumbers[number];

    } else if (number > 20 && number < 100) {
        number = String(number);
        one = +number[1];
        ten = +number[0] * 10;
        one === 0 ? result = `${arrayOfNumbers[ten]}` : result = `${arrayOfNumbers[ten]} ${arrayOfNumbers[one]}`;

    } else if (number >= 100 && number <= 999) {
        number = String(number);
        ten = number.slice(1, 3);
        if (ten >= 10 && ten <= 19) {
            result = `${arrayOfNumbers[+number[0]]} hundred ${arrayOfNumbers[+ten]}`;
        } else {
            splitNumbers(number);            
        }
    }

    return result;






    function splitNumbers(number) {
        one = +number[2];
        ten = +number[1] * 10;
        hundred = +number[0];

        if (one === 0 && ten === 0) {
            result = `${arrayOfNumbers[hundred]} hundred`;
        } else if (one === 0) {
            result = `${arrayOfNumbers[hundred]} hundred ${arrayOfNumbers[ten]}`;
        } else if (ten === 0) {
            result = `${arrayOfNumbers[hundred]} hundred ${arrayOfNumbers[one]}`;
        } else {
            result = `${arrayOfNumbers[hundred]} hundred ${arrayOfNumbers[ten]} ${arrayOfNumbers[one]}`;
        }
    }
};