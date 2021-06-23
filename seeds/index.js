const seedPatients = require('./patients-seeds');
const seedCaregivers = require('./caregivers-seeds');
const seedPatientSchedule = require('./patient-schedule-seeds')
const seedCaregiverSchedule = require('./caregiver-schedule-seeds');
const seedAppointments = require('./appointments-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPatients();
    console.log('\n----- PATIENTS SEEDED -----\n');

    await seedCaregivers();
    console.log('\n----- CAREGIVERS SEEDED -----\n');

    await seedCaregiverSchedule();
    console.log('\n----- CAREGIVER SCHEDULE SEEDED -----\n');

    await seedPatientSchedule();
    console.log('\n----- PATIENT SCHEDULE SEEDED -----\n');

    await seedAppointments();
    console.log('\n----- APPOINTMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();