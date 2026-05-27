const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const pageConfigs = {
  'Courses.jsx': { title: 'Manage Course', description: 'Update course details, curriculum, and pricing.' },
  'Users.jsx': { title: 'Manage User', description: 'Update user profile, roles, and permissions.' },
  'Exams.jsx': { title: 'Manage Exam', description: 'Configure exam settings and questions.' },
  'Settings.jsx': { title: 'System Settings', description: 'Configure global platform preferences.' },
  'InstructorCourses.jsx': { title: 'Manage Course', description: 'Update your course content and structure.' },
  'InstructorAssignments.jsx': { title: 'Manage Assignment', description: 'Configure assignment details and grading criteria.' },
  'AdminDashboard.jsx': { title: 'Activity Logs', description: 'View and manage system activities.' },
  'InstructorDashboard.jsx': { title: 'Manage Item', description: 'Update item details.' }
};

walkDir('src/pages', function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    let fileName = path.basename(filePath);
    
    let config = pageConfigs[fileName] || { title: 'Manage Item', description: 'Update item details.' };
    
    let stateString = `, { state: { title: '${config.title}', description: '${config.description}' } }`;

    if (content.includes("navigate('/admin/action')")) {
      content = content.replace(/navigate\('\/admin\/action'\)/g, `navigate('/admin/action'${stateString})`);
      updated = true;
    }
    if (content.includes("navigate('/instructor/action')")) {
      content = content.replace(/navigate\('\/instructor\/action'\)/g, `navigate('/instructor/action'${stateString})`);
      updated = true;
    }

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed dynamic state in: ' + filePath);
    }
  }
});
