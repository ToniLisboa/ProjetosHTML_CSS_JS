// Exemplo de interatividade: Validação do formulário
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples
    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contactForm').reset(); // Limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

emailjs.init('SEU_USER_ID'); // Substitua pelo seu User ID do EmailJS

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this)
        .then(function () {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contactForm').reset();
        }, function (error) {
            alert('Erro ao enviar a mensagem. Tente novamente.');
        });
});