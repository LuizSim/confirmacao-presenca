document.getElementById('presencaForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const messageElement = document.getElementById('message');

    messageElement.textContent = 'Parabéns! Sua presença foi registrada com sucesso!';
    messageElement.classList.add('show');

    document.getElementById('presencaForm').reset();

    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 3000);

    try {
        console.log('Enviando requisição para o Google Apps Script...');
        const response = await fetch('https://script.google.com/macros/s/AKfycbwqjDmarBu6ZHL_Cd-X3cpHvwbHP9I1YbmI-Q1WEpnbTcLNoo4s1_rEn2-dHrTkzFjh/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        });

        console.log('Requisição enviada com sucesso');
    } catch (error) {
        console.error('Erro detalhado:', error);
        messageElement.textContent = 'Erro ao conectar com o servidor: ' + error.message;
        messageElement.style.color = 'red';
        messageElement.classList.add('show');

        setTimeout(() => {
            messageElement.classList.remove('show');
        }, 3000);
    }
});