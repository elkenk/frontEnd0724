import React from 'react'

function Animals() {
    const animals = ["pigs,", "goats", "sheep", ]
    const tyhjenda = () => {

    }
   
  return (
    <div>
 <div>Loomade arv: {animals.length}tk</div>
       



       {animals.map(animals => <div>{animals}</div>)}
       <button onClick={tyhjenda}>tühjenda</button>
       {animals.length === 0 &&
    <div>
    <div>Loomi ei ole</div>
    
    </div>}
    </div>
  )
}

export default Animals