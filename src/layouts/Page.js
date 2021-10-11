import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Products from "../pages/Products";

const Page = () => {
    return ( 
        <>
            <switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/products" exact component={Products}/>
            </switch>
        </>
     );
}
 
export default Page;