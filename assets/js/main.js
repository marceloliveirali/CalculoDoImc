// Capturar evento de submit do formulário
const form = window.document.querySelector('.form');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    const inputPeso = evt.target.querySelector('#peso');
    const inputAltura = evt.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`

    if (!peso && !altura) {
        setResultado('Peso e altura invalidos', false);
        return;
    }

    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    setResultado(msg, true)
});

function criaParagafo () {
    const p = window.document.createElement('p');

    return p;
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'obesidade grau 3'
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}

function setResultado (msg, isValid) {
    const resultado = window.document.querySelector('#resultado');
    const p = criaParagafo();

    resultado.innerHTML = '';
    p.innerHTML = msg;
    resultado.appendChild(p);

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
}