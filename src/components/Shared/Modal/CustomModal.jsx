import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../../images/companyImage.jpg';



const CustomModal = ({ setShow, show, searchData }) => {

  console.log(searchData);

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton className='bg-light border'>
          <h5>Available Jobs</h5>
        </Modal.Header>
        <Modal.Body>
          {
            searchData?.map((data, index) => <div key={index++} className='container'>
              <div className="row">
                <div className="p-1 col-md-6">
                  <h4>{data.title}</h4>
                  <h6>{data.name}</h6>
                </div>
                <div className="col-md-6">
                  <img src={logo} alt="company logo" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <h5>Start Date</h5>
                  <p>Immediately</p>
                </div>
                <div className="col-md-3">
                  <h5>Salary</h5>
                  <p>20k BDT</p>
                </div>
                <div className="col-md-3">
                  <h5>Apply by</h5>
                  <p>{data.deadline}</p>
                </div>
              </div>
            </div>)
          }
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;