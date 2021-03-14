import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Table from './Components/Table';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete'
import CheckBox from '@material-ui/core/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from  '@material-ui/core/TextField'

import { useState } from 'react';



function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return(
    <FormControlLabel 
    control={
      <CheckBox 
      icon={<DeleteIcon />}
      checkedIcon={<SaveIcon />}
      checked={checked}
      onChange={(e)=> setChecked(e.target.checked)}
      inputProps={{
        'aria-label' : 'secondary checkbox'
      }}
      />}
      label='Testing Checkbox'

    />
   
  )
}


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <TextField />
        <CheckboxExample />

        <ButtonGroup variant="contained">
        <Button 
        onClick={()=>alert('ello chap')} 
        color="secondary"
        style={{
          fontSize: 10
        }}>
          Hellooo World
        </Button>

        <Button
        color="secondary"
        endIcon={<SaveIcon />}>
          Save all thy change
        </Button>

        <Button 
        endIcon={<DeleteIcon />}
        hfref="/table" 
        size="large"
        color="primary"
        style={{
          fontSize: 24
        }}>
          Discard
        </Button>

        </ButtonGroup>
        <CheckboxExample />

        
        <img src={logo} className="App-logo" alt="logo" />
        
       
      </header>


      <Router>
      <Link to="/table">Table </Link>

        <Route path="/table" exact>
          <Table />
        </Route>
      </Router>
    </div>



  );
}

export default App;
