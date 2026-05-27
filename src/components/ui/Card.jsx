import React from 'react';
import './Card.css';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ title, subtitle, action }) => {
  return (
    <div className="card-header">
      <div>
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      {action && <div className="card-action">{action}</div>}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

export const KpiCard = ({ title, value, icon: Icon, trend, trendValue }) => {
  return (
    <Card className="kpi-card">
      <CardContent>
        <div className="kpi-header">
          <div className="kpi-info">
            <p className="kpi-title">{title}</p>
            <h2 className="kpi-value">{value}</h2>
          </div>
          <div className="kpi-icon-wrapper">
            {Icon && <Icon size={24} className="kpi-icon" />}
          </div>
        </div>
        {trend && (
          <div className="kpi-footer">
            <span className={`kpi-trend ${trend === 'up' ? 'positive' : 'negative'}`}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}
            </span>
            <span className="kpi-trend-text">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
