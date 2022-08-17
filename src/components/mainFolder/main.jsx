import HomePage from "../Pages/HomePage";
import QueryData,{useData} from "../DataQuery/dataQuery";

function MainPage(){
    return(
        <QueryData>
            <HomePage/>
        </QueryData>  
    )
}

export default MainPage