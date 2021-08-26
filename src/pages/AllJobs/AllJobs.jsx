import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import JobListAnimation from '../../components/Shared/Animations/JobListAnimation/JobListAnimation';
import SingleJobList from '../../components/Shared/SingleJobList/SingleJobList';



const AllJobs = () => {
    const [job, setJob] = React.useState([]);
    const [spinner, setSpinner] = React.useState(true);

    React.useEffect(() => {
        fetch("https://aqueous-cove-89051.herokuapp.com/joblisting")
            .then((res) => res.json())
            .then((data) => {
                setJob(data)
                setSpinner(false)
            });
    }, []);

    return (
        <>
            <Header />
            <Container>
                {spinner ? (
                    <JobListAnimation />
                ) : (
                    <div className="col-md-12 mt-5 pt-5 px-0">
                        {job?.map((singleJob) => (
                            <SingleJobList data={singleJob} key={singleJob._id}></SingleJobList>
                        ))}
                    </div>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default AllJobs;