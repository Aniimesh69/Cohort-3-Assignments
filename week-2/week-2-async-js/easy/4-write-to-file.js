const fs = require("fs")

let data = "Lets make some changes to the existing 4-write-to-file.md:- \nHey There \nGG";

fs.writeFile("4-write-to-file.md", data, (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
          console.error('Error: File not found!');
        } else {
          console.error('Error writing file:', err);
        }
        return;
    }else{
        console.log("File written successfully");
        console.log("The written file has the following contents:");
        console.log(fs.readFileSync('4-write-to-file.md', 'utf8'));
    }
});