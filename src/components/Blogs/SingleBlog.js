import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Card, Container} from 'react-bootstrap';
import blogImage from "../../images/banner.webp";

const SingleBlog = () => {
    const {id} = useParams();
    console.log(id)
    const [singleBlog, setSingleBlog] = useState([]);
  

    useEffect(() => {
      const fetchSingleBlog = async () =>{
          const res = await axios.get(`http://localhost:8080/singleBlog/${id}`)
          setSingleBlog(res.data)
      }
      fetchSingleBlog();
    }, [])
    
    return (
        <div>
        
        {
              singleBlog.map(blog => (
            <Container md={4} sm={6} xs={12}>
                 
               <Card  className="mb-5 p-4">
                 
                 <img src={blogImage} alt="Blog"></img>
                 <Card.Body>
                   <Card.Title>{blog.title}</Card.Title>
                   <Card.Text>
                     {blog.description}
                   </Card.Text>
                 </Card.Body>
               </Card>
               
            </Container>
            ))
            }
            
        </div>
    );
};

export default SingleBlog;