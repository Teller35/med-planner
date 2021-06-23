const Caregiver = require('./Caregiver');
const Patient = require('./Patient');
const CaregiverSchedule = require('./CaregiverSchedule');
const PatientSchedule = require('./PatientSchedule');
const Appointments = require('./Appointments');

// patient to appointments
Patient.hasMany(Appointments, {
    foreignKey: 'patient_id'
});

Appointments.belongsTo(Patient, {
    foreignKey: 'patient_id',
});

// caregiver to appointments
Caregiver.hasMany(Appointments, {
    foreignKey: 'caregiver_id'
});

Appointments.belongsTo(Caregiver, {
    foreignKey: 'caregiver_id'
});

// caregiver schedule to appointments 
CaregiverSchedule.hasMany(Appointments, {
    foreignKey: 'caregiver_sched_id'
});

Appointments.belongsTo(CaregiverSchedule, {
    foreignKey: 'caregiver_sched_id'
});

// patient schedule to appointments
PatientSchedule.hasMany(Appointments, {
    foreignKey: 'patient_sched_id'
});

Appointments.belongsTo(PatientSchedule, {
    foreignKey: 'patient_sched_id'
});

// caregiver schedule to caregiver
CaregiverSchedule.belongsTo(Caregiver, {
    foreignKey: 'caregiver_id'
});

Caregiver.hasMany(CaregiverSchedule, {
    foreignKey: 'caregiver_id'
});

// patient schedule to patient
PatientSchedule.belongsTo(Patient, {
    foreignKey: 'patient_id'
});

Patient.hasMany(PatientSchedule, {
    foreignKey: 'patient_id'
});

module.exports = {
    Caregiver,
    Patient,
    CaregiverSchedule,
    PatientSchedule,
    Appointments
}