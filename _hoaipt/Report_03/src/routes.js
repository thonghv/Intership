import React from "react"
import Homepages from "./pages/homepages/homepages";
import Notfundpages from "./pages/notfundpages/notfundpages";
import Productlistpages from "./pages/productListpages/productListpages";
import ProductActionpage from "./pages/productActionpages/productActionpages";
const route=[
{
    path:"/",
    exact:true,
    main:()=> <Homepages />
},
{
    path:"/productList",
    exact:false,
    main:()=><Productlistpages />
},
{
 path:"/product/add",
 exact:false,
 main:()=><ProductActionpage />
},
{
    path:"/product/edit",
    exact:false,
    main:({match})=><ProductActionpage match={match}/>
},

{
    path:"",
    exact:false,
    main:()=> <Notfundpages />
}
];
export default route;