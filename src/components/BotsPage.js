import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import React, { useState, useEffect } from 'react';

function BotsPage() {
  const [allBots, setAllBots] = useState([])
  const [army, setArmy] = useState([])
  
  useEffect(()=>{
    const request = async () => {
      let req = await fetch('http://localhost:8002/bots')
      let res = await req.json()
      await setAllBots(res)

      //await console.log(allBots)
      // Would like to know why I cant get this to consistently console log allBots. Can't tell what I'm doing wrong.
      // Only logs when page has already been loaded.
    }
    request()
  }, [])

  return (
    <div>
      <YourBotArmy army={army} setArmy={setArmy} />
      <BotCollection allBots={allBots} army={army} setArmy={setArmy} />
    </div>
  )
}

export default BotsPage;