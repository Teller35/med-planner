const { Caregiver } = require('../models');

const caregiverData = [
    {
        practice_name: 'New Sacred Heart Hospital',
        first_name: 'John Michael',
        last_name: 'Dorian',
        specialty: 'M.D.',
        phone: '201-345-1298',
        address: '12629 Riverside Drive, North Hollywood, Los Angeles, CA 91606',
        fax: '665-089-0081',
        email: 'newsacredheartjdorian@med.com',
        password: 'password1234'
    },
    {
        practice_name: 'New Sacred Heart Hospital',
        first_name: 'Elliot',
        last_name: 'Reid',
        specialty: 'Endocrinology',
        phone: '201-987-0985',
        address: '12629 Riverside Drive, North Hollywood, Los Angeles, CA 91606',
        fax: '665-089-0083',
        email: 'newsacredheartereid@med.com',
        password: 'password1234'
    },
    {
        practice_name: 'New Sacred Heart Hospital',
        first_name: 'Christopher',
        last_name: 'Turk',
        specialty: 'Chief of Surgery',
        phone: '201-264-6124',
        address: '12629 Riverside Drive, North Hollywood, Los Angeles, CA 91606',
        fax: '665-089-0082',
        email: 'newsacredheartcturk@med.com',
        password: 'password1234'
    },
    {
        practice_name: 'Princeton-Plainsboro Teaching Hospital',
        first_name: 'Gregory',
        last_name: 'House',
        specialty: 'Diagnostician',
        phone: '201-452-0762',
        address: '30 Prospect Street, Plainsboro, NJ 08512',
        fax: '634-001-3000',
        email: 'princetonplansboroghouse@med.com',
        password: 'password1234'
    },
    {
        practice_name: 'Princeton-Plainsboro Teaching Hospital',
        first_name: 'James',
        last_name: 'Wilson',
        specialty: 'Oncology',
        phone: '201-745-0254',
        address: '30 Prospect Street, Plainsboro, NJ 08512',
        fax: '634-001-3002',
        email: 'princetonplansborojwilson@med.com',
        password: 'password1234'
    }
];

const seedCaregivers = () => Caregiver.bulkCreate(caregiverData);

module.exports = seedCaregivers;