const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Path to react-scripts
const reactScriptsPath = path.join(__dirname, 'node_modules', '.bin', 'react-scripts');

try {
  // Check if we're on Linux (Vercel environment)
  if (os.platform() !== 'win32') {
    console.log('Setting executable permissions for react-scripts...');
    try {
      fs.chmodSync(reactScriptsPath, '755');
      console.log('Permissions set successfully');
    } catch (err) {
      console.error('Failed to set permissions:', err);
    }
  }

  // Run the build command
  console.log('Running build command...');
  execSync('react-scripts build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
