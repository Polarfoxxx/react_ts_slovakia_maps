import './App.style.css';
import React from 'react';
import { Container } from './module/Container';
import { NaviBar } from './module/Container';
import { Maps } from './module/Maps';
import { Table } from './module/Table';


function App(): JSX.Element {
  const [index, setIndex] = React.useState(0)
  let components: JSX.Element | JSX.Element[] = []

  /* prepinanie zobrazenia componentov */
  if (index === 0) {
    components = <Maps />
  } else if (index === 1) {
    components = <Table />
  } else if (index === 2) {
    components = [<Table />, <Maps />]
  }


  return (
    <div className="App">
      <div className='navbar'>
        <NaviBar
          setIndex={setIndex}
          index={index} />
      </div>
      <div className='content'>
        <Container.Provider >
          {components}
        </Container.Provider>
      </div>
    </div>
  );
}

export default App;
