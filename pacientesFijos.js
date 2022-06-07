

// codigo del calculo imc de las personas fijas
const pacientes = document.querySelectorAll('.paciente');

// console.log(pacinetes)

for(let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

const tdPeso = paciente.querySelector('.info-peso')
const tdAltura = paciente.querySelector('.info-altura');
const tdImc = paciente.querySelector('.info-imc');

// console.log(tdMaria.textContent);
// console.log(tdAltura.textContent);
// console.log(tdImc.textContent);


let imc = tdPeso.textContent / (tdAltura.textContent * tdAltura.textContent);

tdImc.textContent = imc.toFixed(2);
}