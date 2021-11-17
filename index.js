const Bill = document.querySelector("#bill-given");
const Cash = document.querySelector("#Cash-given");
const btnCalculateChange = document.querySelector("#calculate-change");
const message = document.querySelector(".message-returned");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10,5];

btnCalculateChange.addEventListener("click", function validateAmount() {
  hideMessage();
  if (Bill.value > 0) {
    if (Cash.value >= Bill.value) {
      const amountToBeReturn = Cash.value - Bill.value;
      calculateChange(amountToBeReturn);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill amount");
  }
});
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
function hideMessage() {
  message.style.display = "none";
}
function calculateChange(amountToBeReturn) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
    amountToBeReturn %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}



// const Bill = document.querySelector("#bill-given");
// const Cash = document.querySelector("#Cash-given");
// const btnCalculateChange = document.querySelector("#calculate-change");
// const message = document.querySelector(".message-returned");
// const noOfNotes = document.querySelectorAll(".no-of-notes");
// // const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
// const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5];

// btnCalculateChange.addEventListener("click", function validateAmount() {
// //   clearNotes();
//   hideMessage();
//   if (Bill.value > 0) {
//     if (Cash.value >= Bill.value) {
//       const amountToBeReturn = Cash.value - Bill.value;
//       calculateChange(amountToBeReturn);
//     } else {
//       showMessage("No changes needs to be returned");
//     }
//   } else {
//     showMessage("Invalid Bill amount");
//   }
// });
// function showMessage(msg) {
//   message.style.display = "block";
//   message.innerText = msg;
// }
// function hideMessage() {
//   message.style.display = "none";
// }
// function calculateChange(amountToBeReturn) {
// //   console.log(availableNotes, availableNotes.length);
//   for (let i = 0; i < availableNotes.length; i++) {
//     const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
//     amountToBeReturn %= availableNotes[i];
//     // if (numberOfNotes > 0) 
//     noOfNotes[i].innerText = numberOfNotes;
//   }
// }

// function clearNotes() {
//   for (let i = 0; i < availableNotes.length; i++) {
//     noOfNotes[i].innerText = "";
//   }
// }

