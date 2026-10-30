// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")()

const ROWS = 3
const COLS = 3

const SYMBOL_COUNT = {
    "🔥": 2,
    "😎": 4,
    "🍕": 6,
    "🍜": 8
}

const SYMBOL_VALUE = {
    "🔥": 5,
    "😎": 4,
    "🍕": 3,
    "🍜": 2
}

// Get user deposit and validate is a number
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the amount you wish to deposit: ")
        const depositNumber = parseFloat(depositAmount)
        if (isNaN(depositNumber) || depositNumber <= 0) {
            console.log("You entered an invalid amount, try again.")
        } else
            return depositNumber
        // break
    }
}

// Determine the number of lines they want to bet on
const getNumberOfLines = () => {
    while (true) {
        const numberOfLines = prompt("Enter the number of lines to bet on (1-3): ")
        const linesNumber = parseFloat(numberOfLines)
        if (isNaN(linesNumber) || linesNumber <= 0 || linesNumber > 3) {
            console.log("You entered an invalid number, try again (0-3).")
        } else
            return linesNumber
        // break
    }
}

// Collect a bet amount
const getBet = (balance, lines) => {
    while (true) {
        const betAmnt = prompt("Enter the amount you wish to bet per line: ")
        const betNumber = parseFloat(betAmnt)
        if (isNaN(betNumber) || betNumber <= 0 || betNumber > balance / lines) {
            console.log(`Your bet is invalid, try again with amount equal to or less than $${balance / lines}.`)
        } else
            return betNumber
        // break
    }
}

// Spin the machine
const spin = () => {
    const symbols = []
    for(const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for(let i = 0; i < count; i++) {
            symbols.push(symbol)
        }
    }
    const reels = []
    for (let i = 0; i < COLS; i++) {
        reels.push([])
        const reelSymbols = [...symbols]
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol)
            reelSymbols.splice(randomIndex, 1)
        }
    }
    return reels
}


// let balance = deposit()
// const lines = getNumberOfLines()
// getBet(balance, lines)