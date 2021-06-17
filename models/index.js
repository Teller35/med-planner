const Caregiver = require('./Caregiver');
const Patient = require('./Patient');
const Days = require('./Days');
const Hours = require('./Hours');

// Hours belong to Days

// Caregiver has many Days

// Days has many Caregivers

module.exports = {
    Caregiver,
    Patient,
    Days,
    Hours
}