import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import SingleJob from "../components/Categories/SingleJob";
import Footer from "../components/Footer/Footer";


import Header from "../components/Header/Header";
import "./joblist.css";

const JobList = () => {
  const [job, setJob] = useState([]);
  console.log(job);
  useEffect(() => {
    fetch("https://aqueous-cove-89051.herokuapp.com/joblisting")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);
  console.log(job);
  return (
    <>
      <Header />
      <Container>
        {!job ? (
          <div className="col-md-12 mt-5 pt-5 px-0">
            <Spinner animation="border" variant="success" />
          </div>
        ) : (
          <div className="col-md-12 mt-5 pt-5 px-0">
            {job.map((singleJob) => (
              <SingleJob singleJob={singleJob} key={singleJob._id}></SingleJob>
            ))}
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default JobList;
