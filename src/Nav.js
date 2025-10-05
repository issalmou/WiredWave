import Home from "./PageHome/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./PageLogin/Login";
import Products from "./PageProducts/Products";
import Product from "./PageProductDetail/Product";
import Contact from "./PageContact/Contact";
import NotFound from "./PageNotfound/NotFound";
import About from "./PageAbout/About";
import Cart from "./PageCart/Cart";
import Profile from "./PageProfile/Profile";
import DetailUser from "./PageDetaillUser/DetailUser";
import Search from "./PageSearch/Search";
import Logout from "./PageLogout/Logout";
import Admin from "./PageAdmin/Admin";
export default function Nav() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/detail" element={<DetailUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/product/:categorie?/:asin" element={<Product />} />
            <Route path="/search/:categorie?/:search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}