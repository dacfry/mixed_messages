const messages = {
    firstMessage: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    secondMessage: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    thirdMessage: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
}

let printMessage = message => {
    for (let array in message) {
        const luckyNumber = message[array][Math.floor(Math.random() * 10)]
        switch (array) {
            case 'firstMessage':
                console.log(`First Lucky Number: ${luckyNumber}`)
                break;
            case 'secondMessage':
                console.log(`Second Lucky Number: ${luckyNumber}`)
                break;
            case 'thirdMessage':
                console.log(`Third Lucky Number: ${luckyNumber}`)
            default:
                break;
        }
    }
}

printMessage(messages)