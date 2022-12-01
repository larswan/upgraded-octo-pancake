import React from "react";
import BotCard from './BotCard'

function BotCollection({allBots, army, setArmy}) {
  const handleClick = (bot) => {
    if(army.map(x=>x.id).includes(bot.id)){
      console(bot.name + " is already enlisted")
    }
    else if (army.map(x => x.bot_class).includes(bot.bot_class)){
      alert("Your robo army already has a " + bot.bot_class + " bot")
    }
    else{
      setArmy([...army, bot])
    }
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {
          allBots.map((bot)=>{
            return(
              <div key={bot.id} onClick={()=>{handleClick(bot)}}>
                <BotCard bot={bot} setArmy={setArmy} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;
