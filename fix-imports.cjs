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
    
    // Fix the incorrect react import
    content = content.replace(/import React, { useNavigate } from 'react';/, "import React from 'react';\nimport { useNavigate } from 'react-router-dom';");
    content = content.replace(/import React, { useNavigate }, { useState } from 'react';/, "import React, { useState } from 'react';\nimport { useNavigate } from 'react-router-dom';");
    content = content.replace(/import React, { useState, useNavigate } from 'react';/, "import React, { useState } from 'react';\nimport { useNavigate } from 'react-router-dom';");

    fs.writeFileSync(filePath, content);
    console.log('Fixed: ' + filePath);
  }
});
