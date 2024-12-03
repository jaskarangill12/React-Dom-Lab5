import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <h1>About the App</h1>
      <p>This is a simple task management app built using React.</p>
      <p>
        Created by: <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>Jaskaran Singh Gill</span>
      </p>
      <p>Current Date: {new Date().toLocaleDateString()}</p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </MainLayout>
  );
};

export default AboutScreen;
