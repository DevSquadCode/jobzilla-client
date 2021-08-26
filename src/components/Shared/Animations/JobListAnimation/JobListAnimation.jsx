import React from 'react';

const JobListAnimation = () => {
    return (
        <>
            <div className="container" style={{ height: '100vh', marginTop: '150px' }}>
                <div className="animation-card rounded">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-7 col-md-8">
                                <div className="rounded py-3 animate"></div>
                                <div className="mt-3 py-2 rounded animate w-50"></div>
                            </div>
                            <div className='col-5 col-md-4 d-flex justify-content-end align-items-center'>
                                <div className="profilePic animate w-50 rounded py-4"></div>
                            </div>
                        </div>
                        <div className="py-1">
                            <div className="mt-5 rounded animate py-2 w-25"></div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-md-3">
                                <div className="mt-5 rounded animate py-2"></div>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="mt-5 rounded animate py-2"></div>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="mt-5 rounded animate py-2"></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="col-4 col-md-2">
                                <div className="mt-5 rounded animate py-2"></div>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="mt-5 rounded animate py-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobListAnimation;
