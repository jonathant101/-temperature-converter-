
async function calculate() {
    let from = "usd";
    let to = "brl"
    let { rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/usd`);
    let rate = rates[to];
    var carro= `1 ${getInfoSelect(label_from_currency)} = ${rate} ${getInfoSelect(label_to_currency)}`
    input_to_ammount.value = (input_from_ammount.value * rate).toFixed(2);
    console.log (carro)
  }
console.log(calculate(3))