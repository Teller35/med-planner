const seedPatients = require('./patients-seeds');
const seedCaregivers = require('./caregivers-seeds');

const sequelize = require('../config/connection');
const seedAppointments = require('./appointments-seeds');
const seedHours = require('./hours-seeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPatients();
    console.log('\n----- PATIENTS SEEDED -----\n');

    await seedCaregivers();
    console.log('\n----- CAREGIVERS SEEDED -----\n');

    await seedAppointments();
    console.log('\n----- APPOINTMENTS SEEDED -----\n');

    await seedDates();
    console.log('\n----- DATES SEEDED -----\n');

    await seedHours();
    console.log('\n----- HOURS SEEDED -----\n');

    process.exit(0);
};

seedAll();