import React from 'react';
import TodoFeature from './features/todo/Pages';
import AlbumFeature from './features/Album/Pages';
import Data from './features/connect/connectdata';
import Product from './features/connect/product';
import Header from './features/connect/header';
import Manage from './features/connect/productmange';

function App() {
  return (

    <div className="App">

      <Header />
      {/* <TodoFeature /> */}
      <AlbumFeature />
      <Data />
      {/* <Product></Product> */}
      <Manage />
    </div>
  );
}

export default App;
