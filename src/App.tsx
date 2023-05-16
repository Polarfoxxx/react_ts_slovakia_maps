import './App.style.css';
import React from 'react';
import { Container } from './module/Container';
import { NaviBar } from './module/Container';
import { Maps } from './module/Maps';
import { Table } from './module/Table';
import { ModalForm } from './module/ModalForm';


function App(): JSX.Element {
  const [index, setIndex] = React.useState(0)
  const [show, setShow] = React.useState(false);
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
      <ModalForm
        show={show}
        setShow={setShow} />
      <div className='navbar'>
        <NaviBar
          setShow={setShow}
          setIndex={setIndex}
          index={index} />
      </div>
      <div className='content'>
        <Container >
          {components}
        </Container>
      </div>
    </div>
  );
}

export default App;
