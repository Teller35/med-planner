async function patientLogin(event) {
    event.preventDefault();
    const email = document.querySelector('#email-signIn').value.trim();
    const password = document.querySelector('#password-signIn').value.trim();

    if (email && password) {
        const response = await fetch('/api/patients/login', {
            method: 'post', body: JSON.stringify({ email, password }), headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashpatient');
        }
        else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.signIn-patient').addEventListener('submit', patientLogin);