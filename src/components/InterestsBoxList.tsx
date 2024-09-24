import InterestaInterfacemock from "../interfaces/InterestsInterface";
import { InterestsBox } from "./InterestsBox";

export function InterestsBoxList(){
    return(
        <>
        {InterestaInterfacemock.map((int)=><InterestsBox key={int.id} int={int}></InterestsBox>)}
        
        </>
    )
}