async function editPatient(event) {
    event.preventDefault();

    const first_name = document.querySelector('input[name="first_name"]').value.trim();
    // const last_name = document.querySelector('#last_name').value.trim();
    // const birthdate = document.querySelector('#birthdate').value.trim();
    // const email = document.querySelector('#email').value.trim();
    // const address = document.querySelector('#address').value.trim();
    // const phone = document.querySelector('#phone').value.trim();
    // const contact_preference = document.querySelector('#contact_preference').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/patients/edit/${id}`, {
        method: 'PUT', body: JSON.stringify({ first_name }), headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace('/dashpatient');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-patient-form').addEventListener('submit', editPatient);