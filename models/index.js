const Caregiver = require('./Caregiver');
const Patient = require('./Patient');
const CaregiverSchedule = require('./CaregiverSchedule');
const PatientSchedule = require('./PatientSchedule');
const Appointments = require('./Appointments');

// patient / appointments
Patient.hasMany(Appointments, {
    foreignKey: 'patient_id'
});

Appointments.belongsTo(Patient, {
    foreignKey: 'patient_id',
});

// caregiver / appointments
Caregiver.hasMany(Appointments, {
    foreignKey: 'caregiver_id'
});

Appointments.belongsTo(Caregiver, {
    foreignKey: 'caregiver_id'
});

// caregiver schedule / appointments 
CaregiverSchedule.hasMany(Appointments, {
    foreignKey: 'caregiver_id'
});

Appointments.belongsTo(CaregiverSchedule, {
    foreignKey: 'caregiver_id'
});

// patient schedule / appointments
PatientSchedule.hasMany(Appointments, {
    foreignKey: 'patient_id'
});

Appointments.belongsTo(PatientSchedule, {
    foreignKey: 'patient_id'
});

// caregiver schedule / caregiver
CaregiverSchedule.belongsTo(Caregiver, {
    foreignKey: 'caregiver_id'
});

Caregiver.hasMany(CaregiverSchedule, {
    foreignKey: 'caregiver_id'
});

// patient schedule / patient
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