import React from 'react'

function Months() {
    const months = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];
     const tyhjenda = () => {

       }
  return (
    <div>
       <div>Kuude arv: {months.length}tk</div>
       



       {months.map(months => <div>{months}</div>)}
       <button onClick={tyhjenda}>tühjenda</button>
       {months.length === 0 &&
    <div>
    <div>Kuid ei ole</div>
    
    </div>}
    </div>
  )
}

export default Months