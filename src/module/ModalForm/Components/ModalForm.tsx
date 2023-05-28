
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm, SubmitHandler } from "react-hook-form";
import { TypeCitesObject } from '../../utils/types';
import servicesCitiesJSON from '../../utils/services';
import "../../utils/i18n"
import { useTranslation } from 'react-i18next';
import { Props } from '../type';
import { TypeInput } from '../type';
import { defCitiesObject } from '../defValue';

function ModalForm({ show, setShow }: Props) {
    const [filterCities, setFilterCities] = React.useState<TypeCitesObject>()
    const { register, handleSubmit, reset } = useForm<TypeInput>()
    const { t } = useTranslation()

    /* funckcie spustajuce sa vo modal forme */
    const handleClose = (): void => {
        setShow(false)
        reset()
        setFilterCities(defCitiesObject)
    }

    /* on Submit */
    const handleSubmitFrominput: SubmitHandler<TypeInput> = data => {
        const allCities = servicesCitiesJSON.citiesJSON()
        const filter = allCities.filter((item: TypeCitesObject) => item.psc.replace(/\s+/g, "") === data.register);
        if (filter[0] !== undefined) {
            setFilterCities(filter[0])
        } else {
            alert("cities no exist")
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("SearchTheCity")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleSubmitFrominput)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t("postalCode")}</Form.Label>
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
                            <Form.Label>{t("numberOfInhabitants")}</Form.Label>
                            <Form.Control
                                value={filterCities?.pocetObyvatelov}
                                as="textarea"
                                rows={1} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={() => { reset(); setFilterCities(defCitiesObject) }}>
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

