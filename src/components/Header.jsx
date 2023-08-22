

export const Header = () => {
  return (
    <header className="bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6">
        <h1 className="text-Very.Dark-Blue text-2x1 font-bold mb-1">Social Media DashBoard</h1>
        <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
        <hr className="bg-black mb-[19px]" />
        <div className="flex justify-between">
            <p className="text-Dark-Grayish-Blue font-bold">Dark Mode</p>

          <label htmlFor="darkMode" className="border border-red-600 w-[40px] h-[20px]  rounded-full cursor-pointer">
            <input type="checkbox" id="darkMode" className="sr-omly" />
            <div className="w-[18px] h-[18px] bg-blue-600"></div>
          </label>
        </div>
    </header>
  )
}
