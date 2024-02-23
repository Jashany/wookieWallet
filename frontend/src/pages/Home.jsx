import { Fragment } from "react";
import { Link } from "react-router-dom";
import"./home.css";

const Home = () => {
    return ( 
        <Fragment>
           <div className="main">
                <div className="box">
                    <h1>
                        Welcome to the Star Wars Universe
                    </h1>
                    <Link to="/signin">

                    <button>
                        
                        Login
                    </button>
                    </Link>
                    <Link to="/signup">
                    <button>
                        Signup
                    </button>

                    </Link>
                </div>
           </div>
        </Fragment>
     );
}
 
export default Home;