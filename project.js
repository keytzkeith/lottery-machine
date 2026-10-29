// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")()

const deposit = () => {
    let depositAmount = prompt("Enter the amount you wish to deposit: ")
    const depositAmountInt = parseFloat(depositAmount)
    while (isNaN(depositAmountInt) || depositAmount < 0) {
        depositAmount = prompt("Enter the amount you wish to deposit: ")
    }
    console.log("Invalid Amount, try again")

}
deposit()