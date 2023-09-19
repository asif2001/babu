const scriptURL = 'https://script.google.com/macros/s/AKfycbx3jTOI2UjpyZXDT1l3rN0kS6D8fIdslkD15UHnasO_qoi6SQ4lZ_htduElQtogyQtk/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})