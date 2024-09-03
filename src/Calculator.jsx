
export default function Calculator(props){

    
    return (
        <div  className="input-group" >
            <form  >
            <label>{props.title}</label>
            <input onChange={(event)=>props.changeOnCalc(props.symbol,event.target.value)} type="number" required name={props.title}></input>
            </form >       
        </div>
    );

}