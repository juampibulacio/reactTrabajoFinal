const Button = (props) => {
    function handleClick() {
        alert("clickeaste");
    }

    const styleButton = {
        padding: "8px",
        margin: "5px",
        backgroundColor: props.color || "green",
        color: "white",
    };

    return (
        <button style={styleButton} onClick = {handleClick}>
{props.text}
</button>
    )
};

export default Button