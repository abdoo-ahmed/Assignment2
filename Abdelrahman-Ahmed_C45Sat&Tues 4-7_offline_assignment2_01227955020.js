///////////////////////////////////////// Assignment2 ///////////////////////////////////////

// 1-

// function currentFilePathAndDirectory() {
//   const filePath = __filename;
//   const dirPath = __dirname;
//   console.log(`{File: "${filePath}", Dir: "${dirPath}"}`)
// }

// currentFilePathAndDirectory()

///////////////////////////////////////////////////////////////////////////////////

// 2-

// const path = require('node:path');
// function FileName(filePath) {
//   return path.basename(filePath);
// }

// console.log(FileName('/user/files/report.pdf'))

///////////////////////////////////////////////////////////////////////////////////

// 3-

// const path = require('node:path');
// function fullPath(dividedPath) {
//   return path.posix.format(dividedPath);
// }

// console.log(fullPath({ dir: "/folder", name: "app", ext: ".js" }))

///////////////////////////////////////////////////////////////////////////////////

// 4-

// const path = require('node:path');
// function FileExtension(filePath) {
//   return path.extname(filePath);
// }

// console.log(FileExtension('/docs/readme.md'))

///////////////////////////////////////////////////////////////////////////////////

// 5-

// const path = require('node:path');
// function DividedPathInfo(filePath) {
//   const convertPath = path.parse(filePath);
//   return {
//     Name: convertPath.name,
//     Ext: convertPath.ext
//   };
// }

// console.log(DividedPathInfo('/home/app/main.js'))

///////////////////////////////////////////////////////////////////////////////////

// 6-

// const path = require('node:path');
// function checkAbsolutePath(filePath) {
//   return path.isAbsolute(filePath);
// }

// console.log(checkAbsolutePath('/home/user/file.txt'))

///////////////////////////////////////////////////////////////////////////////////

// 7-

// const path = require('node:path');
// function joinPath(...partOfPathes) {
//   return path.join(...partOfPathes)
// }

// console.log(joinPath("src", "components", "App.js"))

///////////////////////////////////////////////////////////////////////////////////

// 8-


// const path = require('node:path');
// function resolve(relativePath) {
//   return path.resolve(relativePath)
// }

// console.log(resolve('./index.js'))

///////////////////////////////////////////////////////////////////////////////////

// 9- 

// const path = require('node:path');
// function joinTwoPaths(path1, path2) {
//   return path.join(path1, path2)
// }

// console.log(joinTwoPaths('/folder1', 'folder2/file.txt'))

///////////////////////////////////////////////////////////////////////////////////

// 10-

// const fs = require('node:fs').promises;
// const path = require('path');

// async function deleteFile(filePath) {
//   try {
//     await fs.unlink(filePath);
//     const fileName = path.basename(filePath);
//     console.log(`The ${fileName} is deleted.`)
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// deleteFile('file.txt')

//////////////////////////////////////////////////////////////////////////////////

// 11-

// const fs = require('node:fs');
// function createFolder(folderPath) {
//   try {
//     fs.mkdirSync(folderPath, { recursive: true });
//     console.log("Success")
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// createFolder('./newFolder')

///////////////////////////////////////////////////////////////////////////////////

// 12-

// const {EventEmitter} = require('node:events');
// const event = new EventEmitter();

// event.on('start', () => {
//   console.log('Welcome event triggered!')
// })

// event.emit('start')

///////////////////////////////////////////////////////////////////////////////////

// 13-

// const {EventEmitter} = require('node:events');
// const event = new EventEmitter()

// event.on('login', (userName) => {
//   console.log(`User logged in: ${userName}`)
// })

// event.emit('login', 'Ahmed')

///////////////////////////////////////////////////////////////////////////////////

// 14-

// const fs = require('node:fs');

// function readFileSync(filePath) {
//   try {
//     const fileContent = fs.readFileSync(filePath, 'utf8');
//     console.log(`the file content => "${fileContent}"`)
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// readFileSync('./notes.txt')

///////////////////////////////////////////////////////////////////////////////////

// 15-

// const fs = require('node:fs').promises;

// async function writeFileAsync(path, content) {
//   try {
//     await fs.writeFile(path, content, 'utf8');
//     console.log("File written successfully")
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// writeFileAsync('./async.txt', 'Async save')

///////////////////////////////////////////////////////////////////////////////////

// 16-

// const fs = require('node:fs')

// function CheckdirectoryExist(dirPath) {
//     try{
//         fs.statSync(dirPath);
//         return true
//     } catch (error) {
//         return false;
//     }
// }

// console.log(CheckdirectoryExist("./notes.txt"))

///////////////////////////////////////////////////////////////////////////////

// 17-

// const os = require('node:os');

// function OSInformatio() {
//   return {
//     Platform: os.platform(),
//     Arch: os.arch(),
//   };
// }

// console.log(OSInformatio())