'use strict'

// minimum
// task 1

function checkUserAge() {
    let userAge = prompt('How old are you?');

    if (userAge == null) {
        return 'Stop this quiz!';
    }

    while (!Number(userAge)) {
        alert( 'Try again? Age should be a number!' );
        userAge = prompt('How old are you?');
        
        if (userAge == null) {
            return 'Stop this quiz!'
        }
    }

    if (userAge > 0 && userAge <= 11) {
        alert( 'You are a child' );
    } else if (userAge >= 12 && userAge <= 17) {
        alert( 'You are a teenager' );
    } else if (userAge >= 18 && userAge <= 59) {
        alert( 'You are an adult' );
    } else if (userAge >= 60 && userAge <= 100) {
        alert( 'You are a pensioner' );
    } else {
        alert( 'Wow! How it can be?' )
    }
}
// const testF = checkUserAge();

// console.log(testF);


// task 2

function userNumberSymbol() {
    let userNumber = prompt('Write here a number from 0 till 9');

    if (userNumber == null) {
        return 'Stop this quiz!'
    }

    while (!Number(userNumber) && userNumber !== '0' && userNumber.trim() === '') {
        alert( 'Try again! It should be a number!' );
        userNumber = prompt( 'Write here a number from 0 till 9' );
        
        if (userNumber == null) {
            return 'Stop this quiz!'
        }
    }

    userNumber = Number(userNumber);
   
    if (userNumber === 1) {
        alert( '1 !' );
    } else if (userNumber === 2) {
        alert( '2 @' );
    } else if (userNumber === 3) {
        alert( '3 #' );
    } else if (userNumber === 4) {
        alert( '4 $' );
    } else if (userNumber === 5) {
        alert( '5 %' );
    } else if (userNumber === 6) {
        alert( '6 ^' );
    } else if (userNumber === 7) {
        alert( '7 &' );
    } else if (userNumber === 8) {
        alert( '8 *' );
    } else if (userNumber === 9) {
        alert( '9 (' );
    } else if (userNumber === 0) {
        alert( '0 )' )
    } else {
        alert( 'Error!' )
    }
}
// userNumberSymbol();


// task 3

function calculateSumUserRange() {

    const startRange = +prompt('Type first number');
    const endRange = +prompt('Type last number');

    const sumRange = ((startRange + endRange) * (endRange - startRange + 1)) / 2;
    alert(`Your sum of all numbers is  ${sumRange}`);
    console.log(sumRange);
}
// calculateSumUserRange();


// task 4

function userCommomDivisor() {

    const firstNumber = +prompt('Type first number');
    const secondNumber = +prompt('Type second number');
    
    function getCommonDivisor(a, b) {
        if (b === 0) {
            return a;
        } 

        const rem = a % b;

        return getCommonDivisor(b, rem);
    }

    let result = getCommonDivisor(firstNumber, secondNumber);


    alert(`Your result is  ${result}`);

}

// userCommomDivisor();


// task 5

function allDevisorsOfNumber() {

    const numberType = +prompt('Type a number');
    const numberDevisors = [];

    for (let i = 1; i <= numberType; i++) {
        const rem = numberType % i;
        if (rem === 0) {
            numberDevisors.push(i);
        }
    } 
    console.log(numberDevisors);
}
// allDevisorsOfNumber();



// norma
// task 1

function isPalindrome() {

    let userNumber = +prompt('Type a five-digit number');
    let result = 0;

    const initialUserInput = userNumber;
    
    while(userNumber > 0) {        
        const rightDigit = userNumber % 10;
        
        result = result * 10 + rightDigit;
        
        userNumber = Math.floor(userNumber / 10);
    }

    if (initialUserInput === result) {
        alert(`It's a palindrome number`);
    } else {
        alert(`It isn't a palindrome number`);
    }
}
// isPalindrome();


// task 2

function amountPurchaseWithDiscount() {

    const purchaseAmount = +prompt('Type the amount of the purchase');
    let amountDiscount;

    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        amountDiscount = purchaseAmount - (purchaseAmount * 0.03);
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        amountDiscount = purchaseAmount - (purchaseAmount * 0.05);
    } else if (purchaseAmount >= 500) {
        amountDiscount = purchaseAmount - (purchaseAmount * 0.07);
    } else {
        alert('You don`t have any discount');
        return
    }

    alert(`Your amount with discaunt is ${amountDiscount}`);
}
// amountPurchaseWithDiscount();


// task 3

function tenNumbersStat() {

    let positiveNumberCount = 0;
    let negativeNumberCount = 0;
    let zeroCount = 0;
    let oddNumber = 0;
    let evenNumber = 0;

    for (let i = 0; i < 10; i++) {
        const userNumber = +prompt('Type a number');
        if (userNumber > 0) {
            positiveNumberCount = positiveNumberCount + 1;
        } 
        if (userNumber < 0) {
            negativeNumberCount = negativeNumberCount + 1;
        }
        if (userNumber === 0) {
            zeroCount = zeroCount + 1;
        }
        if (userNumber % 2 === 0) {
            evenNumber = evenNumber + 1;
        } else {
            oddNumber = oddNumber + 1;
        }
    } 
    
    alert(`You have ${oddNumber} odd numbers, ${evenNumber} even numbers, ${positiveNumberCount} positive numbers, ${negativeNumberCount} negative numbers, ${zeroCount} zeroes.`);
}
// tenNumbersStat();


// task 4

function getDay(index) {
    switch(index) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednsday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
    }
}

function daysOfTheWeek() {
    
    for (let i = 1; i <= 7; i++) {
        const confirmDay = confirm(`It is ${getDay(i)}. Do you want to know what day is next?`)
        if (confirmDay && i === 7) {
            i = 0
        }
        
        if (!confirmDay) {
            alert('Have a nice day!');
            return
        };
    }
}
daysOfTheWeek();

