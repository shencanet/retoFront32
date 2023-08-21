

export const Header = () => {
  return (
    <header className="bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6">
        <h1 className="text-Very.Dark-Blue text-2x1 font-bold mb-1">Social Media DashBoard</h1>
        <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
        <hr className="bg-black mb-[19px]" />
        <div className="flex justify-between">
            <p className="text-Dark-Grayish-Blue font-bold">Dark Mode</p>
            <label htmlFor="darkMode" className="cursor-pointer text-red-400 font-bold">Etiqueta</label>
            <input type="checkbox" name="darkMode" id="darkMode"/>
        </div>
    </header>
  )
}
