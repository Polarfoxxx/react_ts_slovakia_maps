
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm, SubmitHandler } from "react-hook-form";
import cites from "../../utils/cities.json"

type Props = {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
type TypeCitesObject = {
    meno: string,
    psc: string,
    obyvatelia: number,
    coordinates: {
        latitude: number,
        longitude: number
    }
}

const defCitiesObject = {
    meno: "",
    psc: "",
    obyvatelia: 0,
    coordinates: {
        latitude: 0,
        longitude: 0
    }
}

type TypeInput = {
    register: string
}

function ModalForm({ show, setShow }: Props) {
    const [filterCities, setFilterCities] = React.useState<TypeCitesObject>()
    const { register, handleSubmit, reset } = useForm<TypeInput>()

    const handleClose = (): void => {
        setShow(false)
        reset()
        setFilterCities(defCitiesObject)
    }

    const handleSubmitFrominput: SubmitHandler<TypeInput> = data => {
        const filter = cites.filter((item: TypeCitesObject) => item.psc === data.register);
        if (filter[0] !== undefined) {
            setFilterCities(filter[0])
        } else {
            alert("cities no exist")
        }
        console.log(filter[0]);


    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search the city</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleSubmitFrominput)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="search"
                                placeholder="code"
                                autoFocus
                                {...register("register")}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Mumber of inhabitants</Form.Label>
                            <Form.Control
                                value={filterCities?.obyvatelia}
                                as="textarea"
                                rows={1} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={() => reset()}>
                        Reset
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(handleSubmitFrominput)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm

