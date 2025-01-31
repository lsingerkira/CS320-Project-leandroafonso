import ensignImg from "../Assets/Ensign.png";   // Import images from the "Assets" folder
import italyImg from "../Assets/Italy.png";
import projectImg from "../Assets/Project.png";

function Boards() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            height: "100vh",
            justifyContent: "flex-start",
            paddingTop: "50px"
        }}>
            <h1>Boards</h1>

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                maxWidth: "800px",
                width: "100%"
            }}>

                <div style={boxStyle}>
                    <img src={ensignImg} alt="Ensign" style={imgStyle} />
                </div>
                <div style={boxStyle}>
                    <img src={italyImg} alt="Italy" style={imgStyle} />
                </div>
                <div style={boxStyle}>
                    <img src={projectImg} alt="Project" style={imgStyle} />
                </div>
            </div>
        </div>
    );
}

const boxStyle = {
    width: "300px",
    height: "150px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",  // Rounded edges
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",  // Adds slight shadow for depth
    cursor: "pointer",  // Makes it look clickable
};

const imgStyle = {
    maxWidth: "80%",  // Ensure the image fits inside the box
    maxHeight: "80%", // Maintain aspect ratio within the box
};

export default Boards;