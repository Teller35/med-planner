const seedPatients = require('./patients-seeds');
const seedCaregivers = require('./caregivers-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPatients();
    console.log('\n----- PATIENTS SEEDED -----\n');

    await seedCaregivers();
    console.log('\n----- CAREGIVERS SEEDED -----\n');

    process.exit(0);
};

seedAll();