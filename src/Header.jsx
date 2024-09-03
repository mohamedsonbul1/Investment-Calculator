

export default function Header(props){
    return(
        <div id="header">
            <img src="src/assets/investment-calculator-logo.png" alt="Investment Image" />
        <h1>{props.title}</h1>
        </div>

    );

}