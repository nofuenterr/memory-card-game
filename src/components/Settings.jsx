import '../styles/Settings.css'

function Settings({ ref, setGameState, handleSettingsModal }) {
  return (
    <dialog ref={ref} className="settings-modal" closedby="any">
      <div className="settings-wrapper">
        <p className='settings-title'>Settings</p>
        <div className='settings-item-wrapper'>
          <label htmlFor="music">Music</label>
          <input id='music' className='music' name='music' type="checkbox" />
        </div>
        <div className='settings-item-wrapper'>
          <label htmlFor="sound">Sound</label>
          <input id='sound' className='sound' name='sound' type="checkbox" />
        </div>
        <button className='help settings-item-button'>
          Help
        </button>
        <button onClick={() => {
          handleSettingsModal(false)
          setGameState('menu')
        }} className="back-to-menu settings-item-button">Menu</button>
        <button onClick={() =>
          handleSettingsModal(false)}
          className="close settings-item-button"
        >Close</button>
      </div>
    </dialog>
  )
}

export default Settings