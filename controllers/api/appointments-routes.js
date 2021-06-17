// require dependencies
const router = require('express').Router();

// require models
const { Appointments, Caregiver, Days, Hours, Patient } = require('../../models');

/* Routes Needed for Appointments

GET appointments

by caregiver id
    - days
        - show date
        - show day of week
    - hours
        - show hour
    - appointments
        - show date
        - show day of week
        - show hour
        - show if avaialble (gray out, do not show patient information)
            - from here add an appointment
            
by patient id (require password)
    - appointments
        - show date
        - show day of week
        - show hour
        - show caregiver
            - from here udpate (put) an appointment day and/or hour

get a single appointment
by patient id and appointment id (require password)
    - appointment
        - show date
        - show day of week
        - show hour
        - show caregiver

POST (CREATE) an appointment

by patient id (require password)
    - appointments
        - date
        - day of week
        - hour
        - is_availble change to false
        - caregiver_id

PUT (UPDATE) an appointment

by patient id (require password)
    - appointments
        - date (update)
        - day of week (update)
        - hour (update)
        - is_available: false does not change
        - caregiver_id does not change

DESTROY (DELETE)

by patient id (require password)
    - appointments 
        - delete the appointment by id

*/

// export all router routes
module.exports = router;