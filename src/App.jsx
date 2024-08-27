import React, { useState } from 'react';
import './App.css';
// import Left from './left/main/Left';
// import Right from './Right/main/Right';
import Left from './leftfirst/main/Left';
import Right from './Rightfirst/main/Right';

function App() {
  return (
    <>
      <div className="bg-[#2F3542] flex overflow-x-hidden relative" onClick={close}>
        <div className="left bg-ip-main">
          <Left />
        </div>
        <div className='right'>
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
