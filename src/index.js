// import fs from 'fs/promises';
// import path from 'path';

// import { PATH_DB } from './constants/contacts.js';

// import { addOneContact } from './scripts/addOneContact.js';
// import { countContacts } from './scripts/countContacts.js';
// import { getAllContacts } from './scripts/getAllContacts.js';
// import { generateContacts } from './scripts/generateContacts.js';
// import { removeAllContacts } from './scripts/removeAllContacts.js';
// import { thanos } from './scripts/thanos.js';

// const main = async () => {

//     try {
//         const data = await fs.readFile(PATH_DB, 'utf-8');
//         const contacts = JSON.parse(data);
//             }
//     catch (error) {
//         if (error.code === 'ENOENT') {
//             await fs.writeFile(PATH_DB, '[]');
//             console.log('DB created');
//         }
//     }
// };
