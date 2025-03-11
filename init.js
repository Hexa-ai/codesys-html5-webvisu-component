const fs = require('fs');
const path = require('path');
const readline = require('readline');

function renameAndModifyFiles(directory, oldKeyword, newKeyword) {
  console.log(`Checking directory: ${directory}`);
  const files = fs.readdirSync(directory);
  console.log(`Files found: ${files}`);

  files.forEach(filename => {
    // Exclude node_modules directory
    if (filename === 'node_modules' || filename === '.git') {
      console.log(`Skipping directory: ${filename}`);
      return; // Skip to the next file
    }
    console.log(`Analyzing file: ${filename}`);
    const oldPath = path.join(directory, filename);

    // Rename the file
    if (filename.includes(oldKeyword)) {
      const newFilename = filename.replace(oldKeyword, newKeyword);
      const newPath = path.join(directory, newFilename);
      console.log(`Attempting to rename: ${oldPath} -> ${newPath}`);
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${filename} -> ${newFilename}`);
      filename = newFilename; // Update filename for content modification
    }

    // Modify the file content
    const filePath = path.join(directory, filename);
    let content = fs.readFileSync(filePath, 'utf-8');
    const newContent = content.replace(new RegExp(oldKeyword, 'g'), newKeyword);
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`File content modified: ${filename}`);
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter the component name: ', (componentName) => {
  const directory = __dirname;
  const oldKeyword = 'hai-template-component';

  renameAndModifyFiles(directory, oldKeyword, componentName);
  console.log('Process finished.');
  rl.close();
});