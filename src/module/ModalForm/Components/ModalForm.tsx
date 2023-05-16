
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

type Props = {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

function ModalForm({ show, setShow }: Props) {
    const handleClose = () => setShow(false);

    const handleMumberOfInhabitants = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log("dd");

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search the city</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="code"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Mumber of inhabitants</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleMumberOfInhabitants}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm

