async function caregiverLogin(event) {
    event.preventDefault();
    const email = document.querySelector('#emailCare-signIn').value.trim();
    const password = document.querySelector('#passwordCare-signIn').value.trim();

    if (email && password) {
        const response = await fetch('/api/caregivers/login', {
            method: 'post', body: JSON.stringify({ email, password }), headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashcare');
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signIn-caregiver').addEventListener('submit', caregiverLogin);