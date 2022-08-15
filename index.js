const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes"); // we can't access multiple elements in id. so, here through this class we can access that table in the form of array
const availableNotes = [2000,500,200,100,50,20,10,5,2,1];

//checkButton.addEventListener("click", ()=> console.log("clicked"));
checkButton.addEventListener("click", function validateBillAndCashAmount() {
    //message.style.display="none";
    hideMessage();
    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            var amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            showMessage("Balance to give: " + amountToBeReturned + " ₹");
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Cash provided should be atleast equal to bill amount");
        }
    } else {
        showMessage("Invalid bill amount");
    }

});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hideMessage(msg) {
    message.style.display = "none";
}