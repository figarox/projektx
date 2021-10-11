import React from "react";
import { Route } from "react-router-dom";
import SelectionProduts from "../section/SectionProduts";
import SelectionMain from "../section/SectionMain";

const Page = () => {
    return ( 
        <>
            <switch>
                <Route path="/" exact component={SelectionMain}/>
                <Route path="/products" exact component={SelectionProduts}/>
            </switch>
        </>
     );
}
 
export default Page;