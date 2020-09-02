import React from 'react';

import NewsList from './components/NewsList';
import Description from './components/Description';

import NewsState from './context/News/NewsState';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <NewsState>
      <div className='d-flex flex-row justify-content-start h-100'>
        <NewsList />
        <Description />
      </div>
    </NewsState>
  );
}

export default App;
