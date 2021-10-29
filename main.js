const content = document.getElementById("content");




// event de input
const flujos = new Array()
const pushEvent = ()=> {
    const flujo = document.getElementById('flujo').value
    if(flujo){
        flujos.push(flujo)
        content.innerText = flujos
    }
    console.log(flujos)
}





const cadena = [5000, 8000, 10000]
// function for calculate
// function for calculate the TIR
const calTir = (monto, flujos) => {
    -monto*(1 + k)**2 + f1*(1 + k) + f2
}

// function for calculate VAN
const calVan = (monto, flujos, tasa) => {
    const sumaFlujosActual = flujos.reduce((sum, valor, index) => sum + valor/(1 + tasa)**(1 + index), 0);
    return -monto + sumaFlujosActual
}


