import React from 'react';
import './modal.css';
import Backdrop from "../backdrop/backdrop";
import {Button, Form} from "reactstrap";

const Modal = (
    {title, show, dismiss, children, createOrder}
) => {
    return (
        <Form onSubmit={createOrder}>
            <div className={`${show && 'show'} myModal border rounded p-3 d-flex flex-column align-items-start`}>
                <div className='modalHeader'>
                    {title}
                </div>
                <div className='py-2'>
                    {children}
                </div>
                <div className='d-flex ml-auto'>
                    <Button onClick={dismiss} className='mr-2'>
                        close
                    </Button>
                    <Button>
                        Place order
                    </Button>
                </div>
            </div>
            <Backdrop
                show={show}
                dismiss={dismiss}
            />
        </Form>
    );
};

export default Modal;