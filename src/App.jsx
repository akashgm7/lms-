import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import AdminDashboard from './pages/admin/AdminDashboard';
import Courses from './pages/admin/Courses';
import Users from './pages/admin/Users';
import Exams from './pages/admin/Exams';
import Settings from './pages/admin/Settings';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import InstructorCourses from './pages/instructor/InstructorCourses';
import InstructorAssignments from './pages/instructor/InstructorAssignments';
import InstructorDiscussions from './pages/instructor/InstructorDiscussions';
import GradingInterface from './pages/instructor/GradingInterface';
import DiscussionThread from './pages/instructor/DiscussionThread';

import StudentDashboard from './pages/student/StudentDashboard';
import StudentCourses from './pages/student/StudentCourses';
import StudentQuizzes from './pages/student/StudentQuizzes';
import StudentCertificates from './pages/student/StudentCertificates';
import CoursePlayer from './pages/student/CoursePlayer';
import QuizPlayer from './pages/student/QuizPlayer';
import CertificateViewer from './pages/student/CertificateViewer';

import MainLayout from './components/layout/MainLayout';
import ActionForm from './pages/shared/ActionForm';
import DeleteConfirm from './pages/shared/DeleteConfirm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        
        {/* Auth Route */}
        <Route path="/signin" element={<SignIn />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<MainLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="users" element={<Users />} />
          <Route path="exams" element={<Exams />} />
          <Route path="settings" element={<Settings />} />
          <Route path="action" element={<ActionForm backPath="/admin" />} />
          <Route path="delete" element={<DeleteConfirm itemType="Item" backPath="/admin" />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<div style={{padding: '2rem'}}>Page under construction</div>} />
        </Route>

        {/* Instructor Routes */}
        <Route path="/instructor" element={<MainLayout role="instructor" />}>
          <Route index element={<InstructorDashboard />} />
          <Route path="courses" element={<InstructorCourses />} />
          <Route path="assignments" element={<InstructorAssignments />} />
          <Route path="discussions" element={<InstructorDiscussions />} />
          <Route path="action" element={<ActionForm backPath="/instructor" />} />
          <Route path="delete" element={<DeleteConfirm itemType="Item" backPath="/instructor" />} />
          <Route path="grade" element={<GradingInterface />} />
          <Route path="thread" element={<DiscussionThread />} />
          <Route path="*" element={<div style={{padding: '2rem'}}>Page under construction</div>} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<MainLayout role="student" />}>
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="quizzes" element={<StudentQuizzes />} />
          <Route path="certificates" element={<StudentCertificates />} />
          <Route path="player" element={<CoursePlayer />} />
          <Route path="quiz" element={<QuizPlayer />} />
          <Route path="certificate" element={<CertificateViewer />} />
          <Route path="*" element={<div style={{padding: '2rem'}}>Page under construction</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
