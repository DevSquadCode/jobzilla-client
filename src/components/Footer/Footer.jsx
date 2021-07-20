import React from 'react';
import footerStyle from './footer.module.css'
import logo from '../../images/Job-Exchange-Logo.png';
import { 
    followUs,
    navigationOne, 
    navigationTow, 
    popularJobs 
} from './footerData/FooterData';


const Footer = () => {
    return (
        <footer className='bg-secondary py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias obcaecati sint vero cum adipisci eos officia nihil assumenda rem.</p>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>Navigation</h4>
                                {
                                    navigationOne.map((link, i) => <li key={i++} className='list-unstyled'>{link.title}</li>)
                                }
                            </div>
                            <div className="col-md-3">
                                {
                                    navigationTow.map((link, i) => <li key={i++} className='list-unstyled'>{link.title}</li>)
                                }
                            </div>
                            <div className="col-md-3">
                                <h4>Follow Us</h4>
                                {
                                    followUs.map((link, i) => <li key={i++} className='list-unstyled'>{link.title}</li>)
                                }
                            </div>
                            <div className="col-md-3">
                                <h4>Popular Jobs</h4>
                                {
                                    popularJobs.map((job, i) => <li key={i++} className='list-unstyled'>{job.title}</li>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;