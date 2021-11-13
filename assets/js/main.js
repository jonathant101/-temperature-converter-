function Converter(){
    var escalaOrigem = document.querySelector('input[name="tempIn"]:checked').value;
    var temperatura = document.getElementById("valor").value
    var escalaDesejada = document.querySelector('input[name="tempOut"]:checked').value;
    var resultado = document.getElementById("resultado")
    console.log (temperatura)
    console.log (escalaOrigem)
    console.log (escalaDesejada)
    



  if (escalaOrigem === "celsius" && escalaDesejada === "fahrenheit" ){
       resultado.innerHTML = (temperatura * 1.8 + 32).toFixed(2)
    
    }if (escalaOrigem === "celsius" && escalaDesejada === "kelvin" ){
       resultado.innerHTML = (temperatura + 273.15).toFixed(2)
    
    }if (escalaOrigem === "kelvin" && escalaDesejada === "fahrenheit" ){
       resultado.innerHTML = ((temperatura - 273.15) * 9 / 5 + 32 ).toFixed(2)
    
    }if (escalaOrigem === "kelvin" && escalaDesejada === "celsius" ){
       resultado.innerHTML =(temperatura - 273.15).toFixed(2)
    
    }if (escalaOrigem === "fahrenheit" && escalaDesejada === "celsius" ){
       resultado.innerHTML = ((temperatura - 32) * 5 / 9).toFixed(2)
    
    }if (escalaOrigem === "fahrenheit" && escalaDesejada === "kelvin" ){
       resultado.innerHTML =temperatura + 273.15}


}

