import React from 'react';

const SuccessPage = () => {
    return (
        <div style={{
            padding : 100
        }}>
            <div className='row'>
                <div className='col=sm-12'>
                    <h1>Your Reservaion is successful: </h1>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-12'>
                    <h4>Reservation details: </h4>
                </div>
            </div>


            <div className='row'>
                <div className='col-sm-6'>
                    <div style={{padding: 20}}>
                    <div className='row'>
                        <div className='col-sm-12'>
                            Area Name:
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            Area Code:
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            Area Location:
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            Area Capacity:
                        </div>
                    </div>
                    </div>
                </div>


                <div className='col-sm-6'>
                   <div style={{padding: 20}}>
                    <div className='row'>
                        <div className='col-sm-12'>
                            Equipments available here are:
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                           Equipment name
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            Equipment Model
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                           Eqpuipmemt type
                        </div>
                    </div>
                </div>
                </div>

            </div>

            <div className='row'>
                <div className='col-sm-6'>
                    <button type="submit" className="btn btn-primary">Make Another Booking</button>

                </div>

                <div className='col-sm-6'>
                    <button type="submit" className="btn btn-primary">Cancel Booking</button>

                </div>

            </div>


        </div>
    );
};

export default SuccessPage;
