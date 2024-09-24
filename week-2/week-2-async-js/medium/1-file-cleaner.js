const fs = require('fs');

const cleanFile = (filePath) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanedContent, 'utf-8', (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }
            console.log('File cleaned successfully.');
        });
    });
};

const filePath = 'abc.txt'; 
cleanFile(filePath);