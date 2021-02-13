import React, {useEffect} from 'react';
import {DataProvider} from './context/DataContext.js';
import Test from './components/test.js'


function App() {



  return (
    <DataProvider>
      <div >
        test
      </div>
      <Test />
    </DataProvider>
  );
}

export default App;