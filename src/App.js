import React from 'react';
import TodoFeature from './features/todo/Pages';
import AlbumFeature from './features/Album/Pages';
import Data from './features/connect/connectdata';
import Product from './features/connect/product';
import Header from './features/connect/header';

function App() {
  return (

    <div className="App">

      <Header />
      {/* <TodoFeature /> */}
      <AlbumFeature />
      <Data />
      <div className='container'>
        <Product></Product>
      </div>
    </div>
  );
}

export default App;
