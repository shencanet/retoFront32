

export const Header = () => {
  return (
    <header>
        <h1>Social Media DashBoard</h1>
        <p>Total Followers: 23,004</p>
        <hr/>
        <div className="flex place-content-between">
            <p>Dark Mode</p>
            <input type="checkbox" name="darkMode" id="darkMode"/>
        </div>
    </header>
  )
}
