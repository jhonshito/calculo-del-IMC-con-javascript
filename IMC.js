
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


const nombre = document.getElementById('nombre');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const boton = document.getElementById('boton');

// console.log(boton);

const tabla = document.querySelector('.contenedor');

boton.addEventListener('click', (e) => {
    // console.log('siiiiuuu');
    e.preventDefault()
    
    let pacientesTr = document.createElement('tr');
    let nombreTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let imcTd = document.createElement('td');
    
    
    nombreTd.textContent = nombre.value;
    pesoTd.textContent = peso.value;
    alturaTd.textContent= altura.value;
    imcTd.textContent = peso.value / (altura.value * altura.value);


    
    if (pesoTd.textContent > 500){

        imcTd.textContent = 'Error'

        pesoTd.textContent = 'Peso invalido'

        pacientesTr.style.backgroundColor = '#e91f41'

    } else if(alturaTd.textContent > 2.00){

        alturaTd.textContent = 'Altura invalida'

        pacientesTr.style.backgroundColor = '#e91f41'

        imcTd.textContent = 'Error'
    }

    if(pesoTd.textContent > 500 || alturaTd.textContent > 2.00) {
        pesoTd.textContent = 'Peso invalido'
        alturaTd.textContent = 'Altura invalida'
        imcTd.textContent = 'Error'
        pacientesTr.style.backgroundColor = '#e91f41'
    }

    pacientesTr.appendChild(nombreTd);
    pacientesTr.appendChild(pesoTd);
    pacientesTr.appendChild(alturaTd);
    pacientesTr.appendChild(imcTd);

    tabla.appendChild(pacientesTr);

})
