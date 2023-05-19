import React from "react"
import "../style/Navibar.style.css"
import { ModalForm } from "../../ModalForm";


import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>
  index: number
}

function NaviBar({ setIndex, index }: Props): JSX.Element {
  const [show, setShow] = React.useState(false);


  /* funkcia pre zmenu indexu pre zmenu zobrazenia componentov */
  const handleChangeLayout = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIndex(prew => prew + 1)
    index === 2 && setIndex(0)
  }

  return (
    <>
      <div className="navBarContainer">
        <Navbar className="navbar" bg="black" variant="dark">
          <Container>
            <Navbar.Brand >Slovakia Maps</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => setShow(true)}>Form</Nav.Link>
              <Nav.Link onClick={handleChangeLayout}>Layout</Nav.Link>
              <Nav.Link>Language</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="modalForm">
        <ModalForm
          show={show}
          setShow={setShow} />
      </div>
    </>
  )
}

export default NaviBar