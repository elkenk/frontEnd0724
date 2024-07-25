import React from 'react'

function Words() {
    const words = ["spray", "elite", "exuberant", "destruction", "present"]
    const tyhjenda = () => {

    }
   
    return (
    <div>
        <div>sõnade arv: {words.length}tk</div>
        {words.map(words => <div>{words}</div>)}
       <button onClick={tyhjenda}>tühjenda</button>
       {words.length === 0 &&
    <div>
    <div>sõnu ei ole</div>
    
    </div>}
    </div>
  )
}

export default Words