function enviar(){

  const form = document.querySelector('.contact__form');
  form.addEventListener('submit', function(event) {
  event.preventDefault();
  // validation code here
  if (form.nombre.value && form.email.value && form.asunto.value && form.telefono.value && form.mensaje.value) {
    // form is valid, gather the data
    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      asunto: form.asunto.value,
      telefono: form.telefono.value,
      mensaje: form.mensaje.value
    };
    // Send data to Sendgrid
    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': '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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
              to: [{ email: "estebansergio618@gmail.com", name: "Sergio"}],
              subject: "WPS_" + form.asunto.value
            }],
          from: { from: { email: form.email.value, name: form.nombre.value },
        },
          content: [{
            type: "text/html",
            value: "Nombre: " + form.nombre.value + "<br> Email: " + form.email.value + "<br> Teléfono: " + form.telefono.value + "<br> Mensaje: " + form.mensaje.value
          }]
      }),
    })
    .then(response => {
        if(response.ok)
            return response.json()
            throw new Error('Error');
          })
    .then(data => {
      console.log(data);
        alert('Email sent successfully');
    })
    .catch(error => {
      console.error(error);
        alert('Error sending email');
    });
  } else {
    // form is not valid, display error message
    alert('Please fill in all required fields');
  }
});
}
