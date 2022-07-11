import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { useState } from 'react';

const ModalComponent = () => {
    
    const [show,setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    
    return (
        <>
            <Button onClick={handleShow}>SignUp</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Email</InputGroup.Text>
                        <FormControl
                        type='email'
                        />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Password</InputGroup.Text>
                        <FormControl
                        type='password'
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button variant='primary'>SignUp</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}



export default ModalComponent
