async function confirmCancel(event) {
    event.preventDefault();
    
    const id = document.querySelector('#delete-id').value;

    const response = await fetch(`api/appointments/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();  
    }
    else {
        alert(response.statusText);
    }
}
// }

document.querySelector('.cancel').addEventListener('click', confirmCancel);