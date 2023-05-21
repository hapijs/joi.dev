const fs = require('fs/promises');
const path = require('path');

function getModuleStoragePath(moduleName) {
  return path.join(__dirname, '../static/lib', moduleName);
}

function getModuleInfoPath(moduleName) {
  return path.join(getModuleStoragePath(moduleName), 'info.json');
}

function getModuleChangelogPath(moduleName) {
  return path.join(getModuleStoragePath(moduleName), 'changelog.json');
}

async function getExisting(filePath) {
  try {
    const content = await fs.readFile(filePath);
    return JSON.parse(content);
  } catch {
    // Ignore error
  }
}

module.exports = {
  getModuleStoragePath,
  getModuleInfoPath,
  getModuleChangelogPath,
  getExisting,
};
