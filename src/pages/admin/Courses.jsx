import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell, Badge } from '../../components/ui/Table';

const mockCourses = [
  { id: 'C001', name: 'Advanced React Patterns', instructor: 'Sarah Jenkins', students: 145, status: 'Active', category: 'Development' },
  { id: 'C002', name: 'Machine Learning 101', instructor: 'Prof. Davis', students: 320, status: 'Draft', category: 'Data Science' },
  { id: 'C003', name: 'UX Design Fundamentals', instructor: 'Emma Wilson', students: 89, status: 'Active', category: 'Design' },
  { id: 'C004', name: 'Marketing Analytics', instructor: 'Michael Brown', students: 210, status: 'Archived', category: 'Marketing' },
  { id: 'C005', name: 'Introduction to Python', instructor: 'Prof. Davis', students: 450, status: 'Active', category: 'Development' },
];

const Courses = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Programs & Courses</h1>
          <p className="text-muted">Manage all courses and educational programs.</p>
        </div>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', gap: '0.5rem', alignItems: 'center' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage Course', description: 'Update course details, curriculum, and pricing.' } })}>
          <Plus size={18} /> Add Course
        </button>
      </div>

      <Card>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="topnav-search" style={{ border: '1px solid var(--border-color)' }}>
            <Search size={18} className="text-muted" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="icon-btn" style={{ border: '1px solid var(--border-color)' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage Course', description: 'Update course details, curriculum, and pricing.' } })}>
            <Filter size={18} />
          </button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Course ID</TableHeader>
              <TableHeader>Course Name</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Instructor</TableHeader>
              <TableHeader>Students</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader style={{ textAlign: 'right' }}>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell><span className="text-muted">{course.id}</span></TableCell>
                <TableCell><span className="font-medium">{course.name}</span></TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>{course.students}</TableCell>
                <TableCell>
                  <Badge variant={course.status === 'Active' ? 'success' : course.status === 'Draft' ? 'warning' : 'default'}>
                    {course.status}
                  </Badge>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <button className="icon-btn" style={{ width: '32px', height: '32px' }} onClick={() => navigate('/admin/action', { state: { title: 'Manage Course', description: 'Update course details, curriculum, and pricing.' } })}><Edit size={16} /></button>
                    <button className="icon-btn" style={{ width: '32px', height: '32px', color: 'var(--color-danger)' }} onClick={() => navigate('/admin/delete')}><Trash2 size={16} /></button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Courses;
