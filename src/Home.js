import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return (
        <div style={{
            padding : 100
        }}>
            <div className='row'>
                <div className='col-sm-12'>
                    <div style={{
                        textAlign : "center"
                    }}>
                        <img
                            src="https://www.wichita.edu/_resources/images/logo.svg"
                            alt="Wichita State University Logo"
                            style={{
                                height: 500,
                                width: 500,
                                position: "relative",
                                left: "10%"
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                    <h1 style={{
                        textAlign : "center"
                    }}>
                        Library Creative Space Reservation System
                    </h1>
                </div>
            </div>


            <div className='row'>
                <div className='col-sm-12'>
                    <h3 style={{
                        textAlign : "center"
                    }}>
                        Welcome to C-space
                    </h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                   Creative space is an area for collaboration and experimentation where wichita state university students, faculty and staff can come together to learn, collaborate and work with various technologies on variety projects. Cspace promotes a superior user experience through innovative services that support the education, cultural, and research needs of the the university and its community partners.C-space is located in the Ablah Library.
                </div>
            </div>

            <br/>
            <br/>
            <br/>



            <div className='row'>
                <div className='col-sm-12'>
                    <h5 style={{
                        textAlign : "center"
                    }}>
                        Resources provided by C-space
                    </h5>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-6'>
                    <div style={{
                        textAlign : "center"
                    }}>
                        <button type="button"  className='btn btn-secondary'>Vitual Reality</button>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div style={{
                        textAlign : "center"
                    }}>
                        <button type="button"  className='btn btn-secondary'>Sound booth</button>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            <div className='row'>
                <div className='col-sm-12'>
                    <div className='col-sm-12'>
                        <div style={{
                            textAlign : "center"
                        }}>
                            <button type="button"  className='btn btn-secondary'>Media Design</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-sm-6'>
                    <div style={{
                        textAlign : "center"
                    }}>
                        <button type="button"  className='btn btn-secondary'>One button studio</button>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div style={{
                        textAlign : "center"
                    }}>
                        <button type="button"  className='btn btn-secondary'>Lightband Room</button>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>


            <div className='row'>
                <div className='col-sm-12'>
                    <div style={{
                        textAlign : "center"
                    }}>
                    <button type="button"  className='btn btn-primary'>Reserve an area</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;
