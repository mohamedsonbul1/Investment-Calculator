// import formatter from './util/investment.js';
import {calculateInvestmentResults, formatter} from './util/investment.js';

// export const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   });

export default function Table({dataArray}){
    const data=calculateInvestmentResults(dataArray);
    console.log(data);
    const initialInv= data[0].valueEndOfYear -data[0].interest-data[0].annualInvestment;
    return(
        <div >
             <table id="result">
                <thead>
             <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                { data.map(row=>{
                    const result=row.valueEndOfYear-row.annualInvestment*row.year-initialInv;
                    const totalInvestment=row.valueEndOfYear-result;
                return(
                <tr key={row.year} >
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(result)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                </tr> );
                })}
            </tbody>
            </table>
        </div>
    );
}