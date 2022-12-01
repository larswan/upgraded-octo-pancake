import React from "react";
import BotCard from './BotCard'

function YourBotArmy({army, setArmy}) {
  const handleClick = (bot) => {
    setArmy([...army.filter((x)=>{return x.id !== bot.id})])
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            army.map((bot) => {
              return (
                <div key={bot.id} onClick={() => { handleClick(bot) }}>
                  <BotCard bot={bot} setArmy={setArmy}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
