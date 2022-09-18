let result = document.getElementById("result");

const calculateTip = () => {
  let bill = Number(document.getElementById("totalBill").value);
  let tipPercentage = Number(document.getElementById("tipPercentage").value);

  let tip = bill * (tipPercentage / 100);
  let totalBill = bill + tip;

  document.getElementById("tipPercentageText").innerHTML = `${tipPercentage}%`;

  result.innerHTML = `            
    <h5 style="margin: 8px 0;display: flex; justify-content:space-between;">
    <span>Tip</span>
    <span style="font-size:  20px;">${tip.toFixed(2)}</span>
    </h5>
    <h5 style="margin: 8px 0;display: flex; justify-content:space-between;">
    <span>Total</span>
    <span style="font-size:  20px;">${totalBill.toFixed(2)}</span>
    </h5>
    `
}
