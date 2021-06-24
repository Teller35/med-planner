async function cancelAppointment(event) {
    event.preventDefault();

    const id = document.querySelector('#delete-id').value;

    const response = await fetch(`api/appointments/delete/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('.cancel').addEventListener('click', cancelAppointment);