import { useState, useEffect } from "react";

export const Header = () => {
 
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])
  
  return (
    <header className="bg-Very-Pale-Blue  dark:bg-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6">
        <h1 className="text-Very.Dark-Blue dark:text-Very-Pale-Blue text-2x1 font-bold mb-1">Social Media DashBoard</h1>
        <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
        <hr className="bg-black mb-[19px]" />
        <div className="flex justify-between">
            <p className="text-Dark-Grayish-Blue font-bold">Dark Mode</p>

          <label htmlFor="darkMode" className="border  relative bg-Gray   w-[40px] h-[21px]  rounded-full cursor-pointer overflow-hidden
          p-[1px]">
            <input onClick={handleClick} type="checkbox" id="darkMode" className="peer sr-only" />

            <div className=" w-full  h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0 "></div>

          <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[18px] transition-all"></div>
          </label>
        </div>
    </header>
  )
}
