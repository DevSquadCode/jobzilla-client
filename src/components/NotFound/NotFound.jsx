import React from 'react';

const NotFound = () => {
    return (
        <section className='d-flex flex-column justify-content-center align-items-center' style={{height: '100vh'}}>
            <h2 className='text-danger text-center'>Page Not Found !!</h2>
            <p className='text-secondary'>Please Try Again Later...</p>
        </section>
    );
};

export default NotFound;