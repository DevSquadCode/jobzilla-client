import React from 'react';
import {
    aboutJobZilla,
    followUs,
    navigationOne,
    popularJobs
} from './footerData/FooterData';


const Footer = () => {
    return (
        <footer className='pt-5 pb-1' style={{ background: '#FFF0F5' }}>
            <div className="container py-4">
                <div className="row text-center text-md-start">
                    <div className="col-md-3">
                        <h3>JobZilla</h3>
                        <p className='text-secondary pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias obcaecati sint vero cum adipisci eos officia nihil assumenda rem.</p>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3 py-2">
                                <h5>Navigation</h5>
                                {
                                    navigationOne.map((link, i) => <a href={link.link} key={i++} className='text-decoration-none d-block text-secondary'>{link.title}</a>)
                                }
                            </div>

                            <div className="col-md-3 py-2">
                                <h5>Follow Us</h5>
                                {
                                    followUs.map((link, i) => <a href={link.link} key={i++} className='text-decoration-none d-block text-secondary'>{link.title}</a>)
                                }
                            </div>
                            <div className="col-md-3 py-2">
                                <h5>Popular Jobs</h5>
                                {
                                    popularJobs.map((job, i) => <a href={job.link} key={i++} className='text-decoration-none d-block text-secondary'>{job.title}</a>)
                                }
                            </div>
                            <div className="col-md-3 py-2">
                                <h5>About JobZilla</h5>
                                {
                                    aboutJobZilla.map((link, i) => <a href={link.link} key={i++} className='text-decoration-none d-block text-secondary'>{link.title}</a>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center text-secondary'>&#169; Copyright {new Date().getFullYear()} JobZilla</p>
            </div>
        </footer>
    );
};

export default Footer;