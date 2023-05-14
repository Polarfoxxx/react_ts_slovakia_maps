import "../style/Container.style.css"
import { Navbar } from "../"

type Props = {
    children: JSX.Element | JSX.Element[]
}

function Container({ children }: Props): JSX.Element {
    return (
        <div className="container">
            <div className="containerNavbar">
                <Navbar />
            </div>
            <div className="containerContent">
                {children}
            </div>
        </div>
    )
}

export default Container