import React from "react"
import "../style/Navibar.style.css"
import { ModalForm } from "../../ModalForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import "../../utils/i18n"

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>
  index: number
}

function NaviBar({ setIndex, index }: Props): JSX.Element {
  const [show, setShow] = React.useState(false);
  const { i18n, t } = useTranslation()


  /* funkcia pre zmenu indexu pre zmenu zobrazenia componentov */
  const handleChangeLayout = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIndex(prew => prew + 1)
    index === 2 && setIndex(0)
  }

const changeLang = (lg: string): void => {
  i18n.changeLanguage(lg)
}

  return (
    <>
      <div className="navBarContainer">
        <div className="navbarTittle">Slovakia Map</div>
        <ButtonGroup>
          <Button onClick={() => setShow(true)} variant="danger" >Form</Button>
          <Button onClick={handleChangeLayout} variant="secondary" >{t('display')}</Button>
          <DropdownButton as={ButtonGroup} variant="secondary" title={t('language')} id="bg-nested-dropdown">
            <Dropdown.Item onClick={() => changeLang("sk")}>SK</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLang("en")}>EN</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
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