const fs = require('fs');
const path = require('path');
const { createReadStream, createWriteStream } = require('fs');

const sourceDir = "path-to-source-dir"
const destDir = "path-to-destination-dir"

function copy(sourcefile, destination) {
 // * Create the destination directory if it doesn't exist
 
 // If the destination of the file path does not exist, create a destination/directory
 if(!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
 } 

 // Otherwise, if the destination already exists, read the content of the directory
 const directoryFiles = fs.readdirSync(sourcefile)

 directoryFiles.forEach(file => {
  const sourceFilePath = path.join(sourcefile, file)
  const destinationPath = path.join(destination, file);

  const data = fs.statSync(sourceFilePath)

  // if the item is a file, copy it
  if (data.isDirectory()) {
   copy(sourceFilePath, destinationPath)
  } else {
   // copy using streams
   const readStream = fs.createReadStream(sourceFilePath);
   const writeStream = createWriteStream(destinationPath)

   // pipe data from source file to destination file
   readStream.pipe(writeStream)
  }
 })


}

copy(sourceDir, destDir)