const Idcard = (props) => {
    return ( 
        <div>
            <div className="card w-25 bg-info text-white float-start mx-2 my-2">
                <div className="card-header bg-primary"><h2>Name: {props.name}</h2></div>
                <div className="card-body">
                    <h4 className="card-title"><h3>State: {props.state}</h3></h4>
                    <p className="card-text">Age: {props.age}</p>
                </div>
                <div className="card-footer bg-primary">
                    <button className="btn btn-info text-white">More...</button>
                </div>
            </div>
        </div>
     );
}
 
export default Idcard;
