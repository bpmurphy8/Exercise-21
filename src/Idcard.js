const Idcard = (props) => {
    return ( 
        <div>
            <div class="card w-25 bg-info text-white float-start mx-2 my-2">
                <div class="card-header bg-primary"><h2>Name: {props.name}</h2></div>
                <div class="card-body">
                    <h4 class="card-title"><h3>State: {props.state}</h3></h4>
                    <p class="card-text">Age: {props.age}</p>
                </div>
                <div class="card-footer bg-primary">
                    <button class="btn btn-info text-white">More...</button>
                </div>
            </div>
        </div>
     );
}
 
export default Idcard;