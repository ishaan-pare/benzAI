import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import BasicTabs from './components/Tabpanel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Appanel from "./components/Appanel";
import Item from './components/Item';



function App() {
  return (
    <div className="App">
      <Appanel/>
      <Container maxWidth="xxl" sx={{"width": '90%', "paddingTop": "40px"}}>
          <Item>
            <BasicTabs/>
          </Item>
      </Container>
    </div>
  );
}

export default App;
