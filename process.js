var path = 'ipconfig';

const cp = require('child_process').exec;
const process = cp(path);

process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

process.on('close', (code) => {
    console.log(`child process exit code: ${code}`);
});