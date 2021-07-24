import React from 'react'
import List from './List'
import Data from "./Data";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const  App = () => {

  const [ people , setpeople] = useState(Data)
  
  return (
    <div className = "box">
      <h3>{people.length} birthady today </h3> 
       <List people = {people} />
       <Button variant="contained" color="secondary"  onClick = { () => setpeople( [ ]) } >
        Clear All
      </Button>

      
      
    </div>
  )
}

export default App
