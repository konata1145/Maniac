import React from 'react';
import "./modal.css";
import Login from "./Login";

const Modal = (props) => {
    const {open, close, header} = props;


    return(
        <div className={ open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>&times;</button>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <button className = "close" onClick = {close}>닫기</button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}
export default Modal;