import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../Shared/Sidebar/Sidebar'

const AddReview = () => {
    const [reviewData, setReviewData] = useState({})
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
        // const newReviewData = { ...reviewData }
        // newReviewData.file = e.target.files[0];
        // setReviewData(newReviewData)
    }

    const handleBlur = e => {
        const newData = { ...reviewData };
        newData[e.target.name] = e.target.value;
        setReviewData(newData);
    }
    console.log(reviewData);

    const handleSubmit = e => {
        const formData = new FormData();
        // console.log(reviewData);
        formData.append('name', reviewData.name);
        formData.append('post', reviewData.post);
        formData.append('company', reviewData.company);
        formData.append('feedback', reviewData.feedback);
        formData.append('file', file);

        // console.log(formData);

        fetch('https://aqueous-cove-89051.herokuapp.com/addReview', {
            method: 'POST',
            body: formData

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert("Review added successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })



        e.preventDefault()
    }

    return (
        <div className=" row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className='d-flex justify-content-center'>
                    <Form className='w-75 mt-5' onSubmit={handleSubmit}>
                        <h1 className='mt-2 mb-3'>Add a Review to Inspire Us</h1>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name='name' placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="post">
                            <Form.Label>Post</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name='post' placeholder="Enter your role" />
                        </Form.Group>

                        <Form.Group controlId="company">
                            <Form.Label>Company</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name='company' placeholder="Enter your company" />
                        </Form.Group>

                        <Form.Group controlId="feedback">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control onBlur={handleBlur} as="textarea" type="text" name='feedback' placeholder="Enter your message" />
                        </Form.Group>


                        <Form.Group controlId="file">
                            <Form.Label>Image</Form.Label>
                            <Form.Control onBlur={handleFileChange} type="file" name='file' placeholder="Upload image" />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button className='' variant="primary" type="submit">Submit</Button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;