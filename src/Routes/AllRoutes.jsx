import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ShowAllProducts from "../Pages/ShowAllProducts/ShowAllProducts";
import SelectRole from "../Pages/SelectRole/SelectRole";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Approval from "../Pages/Approval/Approval";
import ShowAllReviews from "../Pages/Dashboard/SuperAdmin/ShowAllReviews/ShowAllReviews";
import PendingRequests from "../Pages/Dashboard/SuperAdmin/PendingRequests/PendingRequests";
import UpdatePersonalInfo from "../Pages/Dashboard/Seller/UpdatePersonalInfo/UpdatePersonalInfo";
import ShowAllBuyers from "../Pages/Dashboard/Seller/ShowAllBuyers/ShowAllBuyers";
import Sells from "../Pages/Dashboard/Seller/Sells/Sells";
import SellerSetProfile from "../Pages/Dashboard/Seller/SellerSetProfile/SellerSetProfile";
import SellerExperimental from "../Pages/Dashboard/Seller/SellerExperimental/SellerExperimental";
import MyProfileSeller from "../Pages/Dashboard/Seller/MyProfileSeller/MyProfileSeller";
import AllExpiredProducts from "../Pages/Dashboard/Seller/AllExpiredProducts/AllExpiredProducts";
import AllAvailableProducts from "../Pages/Dashboard/Seller/AllavailableProducts/AllAvailableProducts";
import AddNewTransaction from "../Pages/Dashboard/Seller/AddNewTransaction/AddNewTransaction";
import AddNewProducts from "../Pages/Dashboard/Seller/AddNewProducts/AddNewProducts";
import AddLoyalBuyers from "../Pages/Dashboard/Seller/AddLoyalBuyers/AddLoyalBuyers";
import BuyerUpdateProfile from "../Pages/Dashboard/Buyer/BuyerUpdateProfile/BuyerUpdateProfile";
import BuyerSetProfile from "../Pages/Dashboard/Buyer/BuyerSetProfile/BuyerSetProfile";
import BuyerMyBuying from "../Pages/Dashboard/Buyer/BuyerMyBuyings/BuyerMyBuying";
import BuyerMyProfile from "../Pages/Dashboard/Buyer/BuyerMyProfile/BuyerMyProfile";
import BuyerExperimentalFeature from "../Pages/Dashboard/Buyer/BuyerExperimentalFeatures/BuyerExperimentalFeature";
import ContactUs from "../Pages/ContactUs/ContactUs";
import GiveReview from "../Pages/GiveReview/GiveReview";
import NotFound from "../Pages/NotFound/NotFound";
import AboutUs from "../Pages/About Us/AboutUs";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },{
                path:"*",
                element:<NotFound></NotFound>
            },{
                path:"/login",
                element:<Login></Login>
            },{
                path:"/signup",
                element:<Signup></Signup>
            },{
                path:"/set-role",
                element:<SelectRole></SelectRole>
            },{
                path:"/show-all-reviews",
                element:<ShowAllReviews></ShowAllReviews>
            },{
                path:"/give-review",
                element:<GiveReview></GiveReview>
            },{
                path:"/contact-us",
                element:<ContactUs></ContactUs>
            },{
                path:"/about-us",
                element: <AboutUs></AboutUs>
            },{
                path:"/show-all-products",
                element:<ShowAllProducts></ShowAllProducts>
            },




            //Buyer  Profile
            {
                path:"buyer-set-profile",
                element:<BuyerSetProfile></BuyerSetProfile>
            },{
                        path:"seller-set-profile",
                        element:<SellerSetProfile></SellerSetProfile>
        },

        
        
        
        
        {
                path:"/dashboard",
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:"buyer-my-profile",
                        element:<BuyerMyProfile></BuyerMyProfile>
                    },{
                        path:"pending-requests",
                        element:<PendingRequests></PendingRequests>,
                    },{
                        path:"update-personal-info",
                        element:<UpdatePersonalInfo></UpdatePersonalInfo>
                    },{
                        path:"show-all-buyers",
                        element:<ShowAllBuyers></ShowAllBuyers>
                    },{
                        path:"sells",
                        element:<Sells></Sells>
                    },{
                        path:"seller-experimental",
                        element:<SellerExperimental></SellerExperimental>
                    },{
                        path:"my-profile-seller",
                        element:<MyProfileSeller></MyProfileSeller>
                    },{
                        path:"all-expired-products",
                        element:<AllExpiredProducts></AllExpiredProducts>
                    },{
                        path:"available-products",
                        element:<AllAvailableProducts></AllAvailableProducts>
                    },{
                        path:"add-new-transactions",
                        element:<AddNewTransaction></AddNewTransaction>
                    },{
                        path:"add-new-products",
                        element:<AddNewProducts></AddNewProducts>
                    },{
                        path:"add-loyal-buyers",
                        element:<AddLoyalBuyers></AddLoyalBuyers>
                    },{
                        path:"buyer-my-buyings",
                        element:<BuyerMyBuying></BuyerMyBuying>
                    },{
                        path:"buyer-experimental-features",
                        element:<BuyerExperimentalFeature></BuyerExperimentalFeature>
                    },{
                        path:"buyer-update-profile",
                        element:<BuyerUpdateProfile></BuyerUpdateProfile>
                    }
                ]
            },{
                path:"/approval",
                element:<Approval></Approval>
            },{
                path:"*",
                element:<p>404 page</p>
            }
        ]
    }
])

export default router;