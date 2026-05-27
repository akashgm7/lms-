import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Moon, Sun, ChevronDown, LogOut, User } from 'lucide-react';

const TopNav = ({ role }) => {
  const [isDark, setIsDark] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light');
  };

  const handleLogout = () => {
    // In a real app, clear tokens here
    navigate('/signin');
  };

  const getRoleName = () => {
    switch (role) {
      case 'admin': return 'Administrator';
      case 'instructor': return 'Instructor';
      case 'student': return 'Student';
      default: return 'User';
    }
  };

  return (
    <header className="topnav">
      <div className="topnav-search">
        <Search size={18} className="text-muted" />
        <input type="text" placeholder="Search courses, users, or settings..." />
      </div>

      <div className="topnav-actions">
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="icon-btn relative">
          <Bell size={20} />
          {/* Notification badge simulation */}
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--color-danger)',
            borderRadius: '50%'
          }}></span>
        </button>

        <div className="profile-container" style={{ position: 'relative' }}>
          <div 
            className="profile-dropdown" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="profile-avatar">
              {getRoleName().charAt(0)}
            </div>
            <div className="flex-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{getRoleName()}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{role}@lumiere.com</span>
            </div>
            <ChevronDown size={16} className="text-muted" />
          </div>

          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <User size={16} />
                <span>My Profile</span>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item text-danger" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Log out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
