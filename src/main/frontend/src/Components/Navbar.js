import { Link } from "react-router-dom";

const Navbar = () => (
    <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px"
    }}>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/favicon.ico" alt="Logo" style={{ width: "30px", height: "30px" }} />
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Random Task</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
            <Link to="/boards" style={{ textDecoration: "none", color: "black" }}>Boards</Link>
            <Link to="/templates" style={{ textDecoration: "none", color: "black" }}>Templates</Link>
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
        </div>
    </nav>
);

export default Navbar;