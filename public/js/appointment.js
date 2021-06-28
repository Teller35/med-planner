// require dependencies
// const { DateTime } = require("luxon");

async function addAppointmentHandler(event) {
    if (event.target.getAttribute("data-bs-toggle") === "modal") {
        let id = event.target.getAttribute("schedule-id");

        let listEl = document.getElementById(id);

        let date = listEl.children[0].textContent.split(':')[1].trim();

        document.querySelector('#modal-appointment-date').innerText = date;

        let startTime = parseInt(listEl.children[1].getAttribute("start-time"));
        let endTime = parseInt(listEl.children[2].getAttribute("end-time"));

        for (let i = startTime; i <= endTime; i++) {
            let modalEl = document.querySelector('.modal-body');
            let blockEl = document.createElement("div");
            blockEl.setAttribute("class", "d-flex justify-content-around");
            blockEl.setAttribute("id", id);

            let timeEl = document.createElement("span")
            timeEl.setAttribute("class", "time-block fs-2");
            timeEl.innerText = `${i}:00`;
            blockEl.appendChild(timeEl)

            let buttonEl = document.createElement("button");
            buttonEl.setAttribute("class", "btn");
            buttonEl.setAttribute("type", "button");
            buttonEl.setAttribute("id", "select-appointment");
            buttonEl.innerText = "Select Appointment";
            blockEl.appendChild(buttonEl);

            modalEl.appendChild(blockEl);
        }
    }
};

async function selectAppointmentHandler(event) {
    if (event.target.getAttribute("id") === "select-appointment") {
        let caregiver_id = parseInt(window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ]);
        let appointment_time = event.target.parentElement.children[0].textContent;
        let date = document.querySelector("#modal-appointment-date").textContent;

        const response = await fetch('/api/appointments/', {
            method: 'POST',
            body: JSON.stringify({
                caregiver_id: caregiver_id,
                appointment_time: appointment_time,
                date: date
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.querySelector('.modal-body').innerHTML = `<h6>Appointment Scheduled!</h6>`;
        } else {
            document.querySelector('.modal-body').innerHTML = `<h6>Unable to save appointment. Please close out and try again.</6>`;
        }
    }
};

document.querySelector('.schedule-section').addEventListener("click", addAppointmentHandler);

document.querySelector('.modal').addEventListener("hidden.bs.modal", () => {
    document.querySelector('.modal-body').innerHTML = "";
    document.querySelector('#modal-appointment-date').innerText = "";
});

document.querySelector('.modal').addEventListener("click", selectAppointmentHandler);