const { Patient } = require('../models');

const patientData = [
    {
        first_name: 'Anthony Edward',
        last_name: 'Stark',
        birthdate: '05/29/1970',
        address: '10880 Malibu Point, Los Angeles, CA 90265',
        phone: '203-555-0198',
        email: 'mr_stark@starkindustries.com',
        contact_preference: 'email',
        password: 'password1234'
    },
    {
        first_name: 'Peter',
        last_name: 'Parker',
        birthdate: '08/10/2001',
        address: '20 Ingram Street, Flushing, NY 11375',
        phone: '202-555-0121',
        email: 'petepark2001@gmail.com',
        contact_preference: 'text',
        password: 'password1234'
    },
    {
        first_name: 'Bruce',
        last_name: 'Banner',
        birthdate: '12/18/1969',
        address: '3033 Round Table Drive, West Chester, OH 45069',
        phone: '201-852-4472',
        email: 'b.banner@yahoo.com',
        contact_preference: 'phone',
        password: 'password1234'
    },
    {
        first_name: 'Wanda',
        last_name: 'Maximoff',
        birthdate: '02/10/1976',
        address: '101 12th Street, Westview, NJ 07305',
        phone: '301-623-0752',
        email: 'wandamax1moff@gmail.com',
        contact_preference: 'email',
        password: 'password1234'
    },
    {
        first_name: 'Carol',
        last_name: 'Danvers',
        birthdate: '08/17/1960',
        address: '98 Manchester Ave, South Ozone Park, NY 11420',
        phone: '301-826-0032',
        email: 'caroldanvers45@hotmail.com',
        contact_preference: 'text',
        password: 'password1234'
    }
];

const seedPatients = () => Patient.bulkCreate(patientData, {individualHooks: true});

module.exports = seedPatients;