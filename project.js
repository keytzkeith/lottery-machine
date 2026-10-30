// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")()

// Get user deposit and validate is a number
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the amount you wish to deposit: ")
        const depositAmountInt = parseFloat(depositAmount)
        if (isNaN(depositAmountInt) || depositAmountInt <= 0) {
            console.log("You entered an invalid amount, try again.")
        } else
            return depositAmountInt
            // break
    }
}

// Determine the number of lines they want to bet on
const getNumberOfLines = () => {
    while (true) {
        const numberOfLines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLinesInt = parseFloat(numberOfLines)
        if (isNaN(numberOfLinesInt) || numberOfLinesInt <= 0 || numberOfLinesInt > 3) {
            console.log("You entered an invalid number, try again (0-3).")
        } else
            return numberOfLinesInt
        // break
    }
}

deposit()
getNumberOfLines()