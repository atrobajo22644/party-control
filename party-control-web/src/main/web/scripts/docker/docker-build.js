const version = require('../version.js');
const sh = require('shelljs');

const imageName = 'party-control-web';

sh.exec(`docker build -t ${imageName}:latest -t ${imageName}:${version} .`);

