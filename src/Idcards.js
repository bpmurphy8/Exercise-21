import Idcard from "./Idcard";
import completedata from "./Data.json";

const Idcards = () => {


    return ( 
        <div>
            {
                completedata.data.map( (elem) => {
                    return <Idcard name={elem.name} state={elem.des} age={elem.age} />
                })
            }  
        </div>
     );
}
 
export default Idcards;