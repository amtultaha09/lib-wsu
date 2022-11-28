

const SubmitForm = () => {
    return (
        <div style={{
            padding: 100
        }}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">First Name: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Last Name: </label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">WSU ID:</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Date:</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Check In Time:</label>
                    <input type="number" className="form-control" max={24} id="exampleInputPassword1"/>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Check Out Time:</label>
                    <input type="number" className="form-control" max={24} id="exampleInputPassword1"/>
                </div>




                <button type="submit" className="btn btn-primary">Submit</button>

                <button type="submit" className="btn btn-primary">Cancel</button>


            </form>
        </div>
    )
};

export default SubmitForm;
