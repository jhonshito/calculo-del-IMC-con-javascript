
// seleccionando el formulario y el boton
const nombre = document.getElementById('nombre');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const boton = document.getElementById('boton');

const tabla = document.querySelector('.contenedor');

// evento del boton
boton.addEventListener('click', (e) => {
    e.preventDefault()
    
    const formulario = document.querySelector('form')

// creando las etiquetas tr y td
    let pacientesTr = document.createElement('tr');
    let nombreTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let imcTd = document.createElement('td');

    
    
    
// agregando los valores a la etiquetas creadas
    nombreTd.textContent = nombre.value;
    pesoTd.textContent = peso.value;
    alturaTd.textContent= altura.value;
    imcTd.textContent = peso.value / (altura.value * altura.value).toFixed(3);
    


    
// si hay algun error en lo ingresado por el usuario
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


// agregando las etiquetas creadas al tr y a la tabla
    pacientesTr.appendChild(nombreTd);
    pacientesTr.appendChild(pesoTd);
    pacientesTr.appendChild(alturaTd);
    pacientesTr.appendChild(imcTd);

    tabla.appendChild(pacientesTr);
    formulario.reset();
    
})
