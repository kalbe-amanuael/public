const inputBill = process.argv[2] || "350";
const inputPartySize = process.argv[3] || "4";
const paymentMethod = (process.argv[4] || "telebirr").toLowerCase();

// Convert the bill using Number() and party size using parseInt()
const bill = Number(inputBill);
const partySize = parseInt(inputPartySize, 10);

// 2. Add a tiered tip (10% if bill > 300 ETB, else 5%)
let tipPercentage = bill > 300 ? 0.1 : 0.05;
const tipAmount = bill * tipPercentage;

// 3. Use a switch statement to determine the service fee
let serviceFee = 0;
switch (paymentMethod) {
  case "telebirr":
    serviceFee = 5; // Example: 5 ETB fee
    break;
  case "cbe birr":
  case "cbebirr":
    serviceFee = 7; // Example: 7 ETB fee
    break;
  default:
    serviceFee = 0;
    break;
}

// 4. Compute the total and the per-person amount
const totalBill = bill + tipAmount + serviceFee;
const amountPerPerson = partySize > 0 ? totalBill / partySize : 0;

// 5. Print a clear message using a template literal
console.log(`
=========================================
      TeleBirr & Split Calculator
=========================================
Original Bill:    ${bill.toFixed(2)} ETB
Tip Applied:      ${tipPercentage * 100}% (${tipAmount.toFixed(2)} ETB)
Service Fee:      ${serviceFee.toFixed(2)} ETB (${paymentMethod.toUpperCase()})
-----------------------------------------
Total Amount:     ${totalBill.toFixed(2)} ETB
Party Size:       ${partySize} person(s)
Amount Per Head:  ${amountPerPerson.toFixed(2)} ETB
=========================================
`);
