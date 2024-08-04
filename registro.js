document.addEventListener('DOMContentLoaded', () => {  
    const form = document.querySelector('form'); // Selecciona el formulario  

    form.addEventListener('submit', function(e) {  
        e.preventDefault(); // Evita el envío del formulario por defecto  

        // Captura los valores de los campos  
        const nombre = document.getElementById('nombre').value;  
        const apellido = document.getElementById('apellido').value;  
        const correo = document.getElementById('correo').value;  
        const contraseña = document.getElementById('contraseña').value;  

        // Validación simple  
        if (!nombre || !apellido || !correo || !contraseña) {  
            alert('Por favor completa todos los campos.');  
            return; // Detener la ejecución si hay campos vacíos  
        }  

        // Aquí podrías simular un registro exitoso  
        alert(`Registro exitoso!\nNombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}`);  

        // Limpia el formulario después de un registro exitoso  
        form.reset();  
    });  
});  