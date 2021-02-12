import React, {useEffect} from 'react';
import {DataProvider} from './context/DataContext.js';
import Test from './components/test.js'


function App() {



  return (
    <DataProvider>
      <div className="w-screen bg-red-900">
        test
      </div>
      <Test />
    </DataProvider>
  );
}

export default App;