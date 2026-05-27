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
  if (filePath.endsWith('.jsx') && !filePath.includes('SignIn.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add useNavigate import if missing
    if (!content.includes('useNavigate')) {
      content = content.replace("import React", "import React, { useNavigate }");
      content = content.replace("import React, { useState }", "import React, { useState, useNavigate }");
    }

    // Add const navigate = useNavigate(); inside the component
    if (!content.includes('const navigate = useNavigate()')) {
      content = content.replace(/const ([A-Za-z]+) = \(\) => {/, "const $1 = () => {\n  const navigate = useNavigate();\n");
    }

    // Replace alert with specific navigates
    content = content.replace(/alert\("Feature coming soon!"\)/g, (match, offset, string) => {
      // Very naive heuristic based on button text if we can find it
      // Let's just use regex to look forward to see what the button text is.
      const snippet = string.substring(offset, offset + 150);
      if (snippet.includes('Delete') || snippet.includes('Trash')) return "navigate('delete')";
      if (snippet.includes('Grade')) return "navigate('/instructor/grade')";
      if (snippet.includes('Reply')) return "navigate('/instructor/thread')";
      if (snippet.includes('Start Quiz')) return "navigate('/student/quiz')";
      if (snippet.includes('Review Course') || snippet.includes('Resume Learning')) return "navigate('/student/player')";
      if (snippet.includes('Download') || snippet.includes('Share')) return "navigate('/student/certificate')";
      
      return "navigate('action')";
    });

    fs.writeFileSync(filePath, content);
    console.log('Updated: ' + filePath);
  }
});
