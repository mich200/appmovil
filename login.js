document.addEventListener('DOMContentLoaded', () => {  
    const form = document.querySelector('form');  

    form.addEventListener('submit', function(event) {  
        event.preventDefault(); // Evita el envío del formulario para validación  

        // Recoge los valores de los campos  
        const usuario = document.getElementById('usuario').value;  
        const contraseña = document.getElementById('contraseña').value;  

        // Validaciones básicas  
        if (usuario.trim() === '' || contraseña.trim() === '') {  
            alert('Por favor, completa todos los campos.');  
            return;  
        }  

        // Si todo está bien, puedes enviar el formulario  
        alert(`Usuario: ${usuario}\nContraseña: ${contraseña}`);  
        
        // Para enviar el formulario después de la validación (opcional)  
        form.submit();  
    });  
});  