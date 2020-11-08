import React from 'react';
import './styles.scss';

type Props = {
  title: String;
  children: React.ReactNode;
};

export const AuthCard = ({ title, children }: Props) => {
  return (
    <div className="card-base auth-card">
      <h1 className="auth-card-title">{title}</h1>
      {children}
    </div>
  );
};
