import React from 'react';
import './Table.css';

export const Table = ({ children }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableHeader = ({ children, style }) => {
  return <th style={style}>{children}</th>;
};

export const TableCell = ({ children, style }) => {
  return <td style={style}>{children}</td>;
};

export const Badge = ({ children, variant = 'default' }) => {
  return <span className={`badge badge-${variant}`}>{children}</span>;
};
