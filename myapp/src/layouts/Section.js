import React from "react";
import { Route } from "react-router-dom";
import SelectionProduts from "../section/SectionProduts";

const Page = () => {
    return ( 
        <>
            <switch>
                <Route path="/products" exact component={SelectionProduts}/>
            </switch>
        </>
     );
}
 
export default Page;