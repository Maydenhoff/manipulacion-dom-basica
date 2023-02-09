const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btncalcular")
const pResultado = document.querySelector("#resultado")
const form = document.querySelector("#form")

form.addEventListener("submit", sumarImputVarios)

function sumarImputVarios(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs= input1.value+input2.value
    pResultado.innerText = "Resultado: " + sumaInputs
}
