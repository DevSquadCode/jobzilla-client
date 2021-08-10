import React, { useState }from "react";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import Sidebar from "../Shared/Sidebar/Sidebar";

const AddBlogs = () => {
  const url = "http://localhost:8080/createBlogs"

    const [data, setData] = useState({
        "title": "",
        "description": "",
        "image": ""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            title: data.title,
            description: data.description,
            image: data.image
        }).then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-10">
          <Form onSubmit={(e)=>submit(e)}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control type="string" placeholder="Write Your Blog Title" onChange={(e)=>handle(e)} id="title" value={data.title} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Blog Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e)=>handle(e)} id="description" value={data.description}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Chose an Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
