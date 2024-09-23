const fs = require("fs")

fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
          console.error('Error: File not found!');
        } else {
          console.error('Error reading file:', err);
        }
        return;
    }
    console.log(data);
})

console.log("Contents of File are here:- ");
