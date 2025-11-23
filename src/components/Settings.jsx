function Settings({ ref, setGameState, handleSettingsModal }) {
  return (
    <dialog ref={ref} className="settings-modal">
      <button>Music</button>
      <button>SFX</button>
      <button>Help</button>
      <button onClick={() => {
        handleSettingsModal(false)
        setGameState('menu')
      }} className="back-to-menu">Menu</button>
      <button onClick={() => 
        handleSettingsModal(false)} 
        className="close-settings"
      >Close</button>
    </dialog>
  )
}

export default Settings