document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;

    const newDiv = document.createElement('div');
    newDiv.className = 'result-item';

    newDiv.innerHTML = `
    <p>Nome: ${nome} ${sobrenome} | CPF: ${cpf} | Email: ${email}</p>
    `;
    
    document.getElementById('results-content').appendChild(newDiv);
    document.getElementById('formulario').reset();
});