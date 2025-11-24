import GithubIcon from '../assets/icons/GithubIcon'
import SettingsIcon from '../assets/icons/SettingsIcon'
import '../styles/UtilityMenu.css'

function UtilityMenu({ handleSettingsModal }) {

  return (
    <div className="utility-menu">
      <a 
        className="github-link utility-menu__item" 
        href="https://github.com/nofuenterr/memory-card-game"
      >
        <GithubIcon />
      </a>
      <button
        onClick={() => handleSettingsModal(true)}
        className="settings utility-menu__item"
      >
        <SettingsIcon />
      </button>
    </div>
  )
}

export default UtilityMenu