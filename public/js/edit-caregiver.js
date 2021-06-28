async function editCaregiver(event) {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const fax = document.querySelector('#fax').value.trim();
    const specialty = document.querySelector('#specialty').value.trim();
    const email = document.querySelector('#email').value.trim();
    const practice_name = document.querySelector('#practice_name').value.trim();
    const address = document.querySelector('#address').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/caregivers/edit/${id}`, {
        method: 'PUT', body: JSON.stringify({ first_name, last_name, phone, fax, specialty, email, practice_name, address }), headers: { 'Content-type': 'application/json' }
    })
    
    if (response.ok) {
        document.location.replace('/dashcare');
    }
    else {
        alert(response.statusText)
    }
}

document.querySelector('.edit-caregiver-form').addEventListener('submit', editCaregiver);

async function addSchedule (event) {
    event.preventDefault();
    console.log('btn working');

    const date = document.querySelector('#new-date').value;
    const start = document.querySelector('#new-start').value;
    const end = document.querySelector('#new-end').value.trim();
    const caregiver_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/caregiverschedule`, {
        method: 'POST', 
        body: JSON.stringify({ 
            caregiver_id,
            date,
            start,
            end 
        }), 
        headers: { 
            'Content-type': 
            'application/json' 
        }
    })
    
    if (response.ok) {
        document.location.replace('/dashcare');
    }
    else {
        alert(response.statusText)
    }
}

document.querySelector('.add-sched-form').addEventListener('submit', addSchedule);