async function signupForm(event) {
    event.preventDefault();

    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
    const birthdate = document.querySelector('#birthdate-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const contact_preference = document.querySelector('#contactPref-signup').value.trim();

    if (first_name && last_name && birthdate && phone && email && address && password && contact_preference) {
        const response = await fetch('/api/patients', {
            method: 'post', body: JSON.stringify({ first_name, last_name, birthdate, phone , email, address, password, contact_preference }), headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashpatient');
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signUp-patient').addEventListener('submit', signupForm);