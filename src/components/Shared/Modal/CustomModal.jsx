import React from 'react';
import { Modal } from 'react-bootstrap';
import SingleJobList from '../SingleJobList/SingleJobList';




const CustomModal = ({ setShow, show, searchData }) => {

  console.log(searchData);

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton className='border bg-light'>
          <h5 className='text-brand'>Available Jobs</h5>
        </Modal.Header>
        <Modal.Body>
          {
            searchData?.map((data, index) => <SingleJobList key={index++} data={data} />)
          }
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;