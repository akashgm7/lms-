import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Settings, 
  FileText,
  MessageSquare,
  Bell
} from 'lucide-react';

const Sidebar = ({ role }) => {
  const getNavItems = () => {
    switch (role) {
      case 'admin':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
          { name: 'Programs & Courses', icon: BookOpen, path: '/admin/courses' },
          { name: 'User Management', icon: Users, path: '/admin/users' },
          { name: 'Exams & Results', icon: FileText, path: '/admin/exams' },
          { name: 'Settings', icon: Settings, path: '/admin/settings' },
        ];
      case 'instructor':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/instructor' },
          { name: 'My Courses', icon: BookOpen, path: '/instructor/courses' },
          { name: 'Assignments', icon: FileText, path: '/instructor/assignments' },
          { name: 'Discussions', icon: MessageSquare, path: '/instructor/discussions' },
        ];
      case 'student':
        return [
          { name: 'Dashboard', icon: LayoutDashboard, path: '/student' },
          { name: 'My Learning', icon: BookOpen, path: '/student/courses' },
          { name: 'Quizzes', icon: FileText, path: '/student/quizzes' },
          { name: 'Certificates', icon: GraduationCap, path: '/student/certificates' },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">
          <GraduationCap size={28} />
        </div>
        <span>Lumiere LMS</span>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.name}
            to={item.path} 
            end={item.path === `/${role}`}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
