import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {children}
      <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <small>&copy; 2024 Jaskaran Singh Gill</small>
      </footer>
    </div>
  );
};

export default MainLayout;
