const Caregiver = require('./Caregiver');
const Patient = require('./Patient');
const CaregiverSchedule = require('./CaregiverSchedule');
const PatientSchedule = require('./PatientSchedule');
const Appointments = require('./Appointments');

// Associations
Appointments.belongsTo(Patient, {
    foreignKey: 'patient_id',
});

Appointments.belongsTo(Caregiver, {
    foreignKey: 'caregiver_id',
});

Patient.hasMany(Appointments, {
    foreignKey: 'patient_id'
});

Caregiver.hasMany(Appointments, {
    foreignKey: 'caregiver_id'
});





module.exports = {
    Caregiver,
    Patient,
    // Days,
    // Hours
}