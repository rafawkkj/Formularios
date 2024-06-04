document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        event.preventDefault();
    }
});
