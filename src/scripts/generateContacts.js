import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  fs.readFile(PATH_DB, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return;
    }
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to db.json:', err);
        return;
      }
      console.log(`Successfully added ${number} new contacts to db.json`);
    });
  });
};

await generateContacts(5);
