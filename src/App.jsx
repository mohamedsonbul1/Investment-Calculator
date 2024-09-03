import Header from "./Header"
import Calculator from "./Calculator"
import { useState } from "react"
import Table from "./Table"

let calcData={
  initialInvestment:-1,
  annualInvestment:-1,
  expectedReturn:-1,
  duration:-1
}


function App() {
  const [calculationData,setCalculationdata]=useState(calcData);
  const validInput=calculationData.duration>=1 && calculationData.annualInvestment>=0 && calculationData.expectedReturn>=0 && calculationData.initialInvestment>=0;

  function handleCalculationData(symbol,value){
    setCalculationdata(prevData=>{
      return {...prevData,
        [symbol]: Number(value)};
    });
    
  }
  
  
  return (
    <div>
    
    <section>
      <Header  title="Investment Calculator" /> 
    </section>

    <div id="user-input" >
        <Calculator  changeOnCalc={handleCalculationData} symbol="initialInvestment" title='Initial Investment' />
        <Calculator changeOnCalc={handleCalculationData}  symbol="annualInvestment" title='Annual Investment' />
        <Calculator changeOnCalc={handleCalculationData}  symbol="expectedReturn" title='Expected Return' />
        <Calculator changeOnCalc={handleCalculationData}  symbol="duration" title='Duration' />
        
    </div>
    {!validInput && <p className="center">Please Enter Duration of Atleast 1 Year</p>}
    {validInput && <Table dataArray={calculationData}/>}
    </ div>
  )
}

export default App
