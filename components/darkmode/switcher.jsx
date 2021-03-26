import { useEffect } from "react";

export default function Switcher(){
    const selectTheme = (theme) => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        const html = document.querySelector('html')

        if(theme == 'dark'){
            html.classList.remove('light')
        }else{
            html.classList.remove('dark')
        }
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.removeItem('theme')
    }, [])

    return(
        <>
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-6 flex items-center justify-between">
            <div className="font-semibold text-lg text-gray-800 dark:text-white"> SIS </div>

            <div>
                <button onClick={() => selectTheme('light')} className="w-4 h-4 bg-gray-200 rounded-full mr-2"></button>
                <button onClick={() => selectTheme('dark')} className="w-4 h-4 bg-black rounded-full"></button>
            </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg overflow-hidden">
            <div className="px-10 py-8">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Lorem, ipsum dolor.</h1>
                <div className="leading-relaxed text-gray-500 dark:text-gray-300 text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos fuga a, quaerat impedit id numquam? Eaque, repellat ducimus magnam commodi cupiditate aut. Cumque atque, porro suscipit quae molestiae officia tempora?
                </div>
            </div>

            <div className="px-10 py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:text-gray-200 dark:border-gray-200">
                Lorem ipsum dolor sit amet.
            </div>
        </div>
        </>
    )
}