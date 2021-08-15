import React from 'react';
import { Modal } from 'react-bootstrap';




const CustomModal = ({setShow, show, inputValue}) => {
    
    return (
      <>
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <Modal.Header closeButton className='bg-light border'>
            <h5>Available Jobs</h5>
          </Modal.Header>
          <Modal.Body>
                <h5>Your Available Jobs <span className="text-success">
                    {inputValue?.jobPosition && `on position ${inputValue?.jobPosition}`} {inputValue?.jobLocation && `in ${inputValue?.jobLocation}`}  
                  </span>
                </h5>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default CustomModal;