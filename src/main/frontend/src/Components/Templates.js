import workIcon from "../Assets/icons8-work-100.png";
import schoolIcon from "../Assets/icons8-school-100.png";
import personIcon from "../Assets/icons8-person-100.png";
import businessIcon from "../Assets/icons8-business-100.png";
import designIcon from "../Assets/icons8-design-100.png";


function Templates() {
    const templates = [
        { name: "Work", icon: workIcon },
        { name: "School", icon: schoolIcon },
        { name: "Personal", icon: personIcon },
        { name: "Business", icon: businessIcon },
        { name: "Design", icon: designIcon },
    ];

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
            <h1>Templates</h1>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                maxWidth: "800px",
                width: "100%"
            }}>
                {templates.map((template, index) => (
                    <div key={index} style={boxStyle}>
                        <img src={template.icon} alt={template.name} style={iconStyle} />
                        <span style={textStyle}>{template.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Box Styling (Now Stacks Icon Above Text)
const boxStyle = {
    width: "140px",   // Adjust width for a more square-like box
    height: "130px",  // Adjust height to fit icon + text
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",  // Stack icon and text vertically
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    padding: "10px",
};

// Icon Styling (Centered at the Top)
const iconStyle = {
    width: "60px",  // Increased size for visibility
    height: "60px",
    marginBottom: "10px",  // Adds space between icon and text
};

// Text Styling (Centered Below Icon)
const textStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
};

export default Templates;