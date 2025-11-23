function UtilityMenu({ handleSettingsModal }) {

  return (
    <div className="utility-menu">
      <a className="github-link" href="https://github.com/nofuenterr">
        Github
      </a>
      <button className="leaderboard">
        Leaderboards
      </button>
      <button 
        onClick={() => handleSettingsModal(true)} 
        className="settings"
      >
        Settings
      </button>
    </div>
  )
}

export default UtilityMenu