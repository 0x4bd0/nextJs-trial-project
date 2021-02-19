import Footer from "./footer";
import NavBar from "./navBar";

const Layout = ( { children } ) => {
    return ( 
        <div className="container">
            <NavBar/>
            <div className="content">
            {children}
            </div>
            <Footer/>
        </div>
     );
}
 
export default Layout;