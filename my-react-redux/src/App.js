import React, {useEffect} from "react";
import Muffins from "./components/Muffins/Muffins"
import {useDispatch} from 'react-redux';
import {getMuffins} from './actions/muffins'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMuffins())
  }, [dispatch]);
    
  return (
        <div>
            <Muffins />
        </div>
    
  );
}

export default App;
