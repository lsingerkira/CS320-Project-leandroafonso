import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                {/*Span is here to separate the Links. When CSS is formated, get rid of it*/}
                <span> | </span>
                <Link to="/page2">Page 2</Link>
            </div>
        </nav>
    );
}

export default Navbar;