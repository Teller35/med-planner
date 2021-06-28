async function addSchedule (event) {
    event.preventDefault();
    console.log('btn working');

    const date = document.querySelector('#new-date').value;
    const start = document.querySelector('#new-start').value;
    const end = document.querySelector('#new-end').value.trim();
    const caregiver_id = document.getElementById('hidden-id').value.trim();

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

document.querySelector('#add-sched').addEventListener('submit', addSchedule);