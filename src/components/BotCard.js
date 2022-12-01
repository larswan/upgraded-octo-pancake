import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, setArmy }) {

  const handleClick = async (bot) => {
    const deleteRequest = async () => {
      let req = await fetch(`http://localhost:8002/bots/${bot.id}`, {method: 'DELETE'})
      if(req.ok) console.log("Bot was deleted")
      else console.log("Bot was probably already deleted from the server and only exists in the DOM and i didnt want to remove it from the collection too cause thats not what the deliverables said. Idk, theres a weird thing cause the red X exists in both army and collection. Hopefully this is the right solution.. Hi Michael!")
      
      setArmy((prevState) => { return [...prevState.filter((x) => { return x.id !== bot.id })] })
    }

    deleteRequest()
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>{handleClick(bot)}}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
