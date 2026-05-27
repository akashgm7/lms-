const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/pages', function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    if (filePath.includes('admin')) {
      if (content.includes("navigate('action')")) { content = content.replace(/navigate\('action'\)/g, "navigate('/admin/action')"); updated = true; }
      if (content.includes("navigate('delete')")) { content = content.replace(/navigate\('delete'\)/g, "navigate('/admin/delete')"); updated = true; }
    } else if (filePath.includes('instructor')) {
      if (content.includes("navigate('action')")) { content = content.replace(/navigate\('action'\)/g, "navigate('/instructor/action')"); updated = true; }
      if (content.includes("navigate('delete')")) { content = content.replace(/navigate\('delete'\)/g, "navigate('/instructor/delete')"); updated = true; }
    } else if (filePath.includes('student')) {
      if (content.includes("navigate('action')")) { content = content.replace(/navigate\('action'\)/g, "navigate('/student/action')"); updated = true; }
      if (content.includes("navigate('delete')")) { content = content.replace(/navigate\('delete'\)/g, "navigate('/student/delete')"); updated = true; }
    }

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed relative paths in: ' + filePath);
    }
  }
});
