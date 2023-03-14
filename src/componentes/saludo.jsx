function Saludo (props) {
    
    const styleSaludo = {
        marginTop:"50px",
        fontSize: "60px",
        fontColor: "white"
    };

    return ( 
        <div style={styleSaludo}>
            {props.text}
            </div>
    )
}

export default Saludo