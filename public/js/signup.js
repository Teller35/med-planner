async function signupForm(event) {
    event.preventDefault();

    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const city = document.querySelector('#city-signup').value.trim();
    const state = document.querySelector('#state-signup').value.trim();
    const zip = document.querySelector('#zip-signup').value.trim();

    if (first_name && last_name && email && address && city && state && zip) {
        const response = await fetch('/api/patients', {
            method: 'post', body: JSON.stringify({ first_name, last_name, email, address, city, state, zip }), headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashpatient');
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.sigUp-patient').addEventListener('submit', signupForm);