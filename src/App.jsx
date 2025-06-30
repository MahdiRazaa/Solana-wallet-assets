import React from 'react';
import Header from './components/header';
import Input from './components/input';
import Button from './components/button';
import Cards from './components/cards';
import Table from './components/table';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="container">
        <Input />
        <Button />
        <Cards />
      </div>
      <Table />
    </div>
  );
}

export default App;
