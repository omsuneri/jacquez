#!/usr/bin/env node

// Build script for GitHub Action
const fs = require('fs');
const path = require('path');

// Read the main package.json
const mainPackage = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Create a modified version for the action (CommonJS)
const actionPackage = {
  ...mainPackage,
  // Remove "type": "module" to use CommonJS for GitHub Actions
  main: 'action.js'
};
delete actionPackage.type;

// Write to dist/package.json
fs.writeFileSync(path.join('dist', 'package.json'), JSON.stringify(actionPackage, null, 2));

console.log('✅ Created dist/package.json for GitHub Action (CommonJS)');
