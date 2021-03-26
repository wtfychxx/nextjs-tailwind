export default function Ring(){
    return(
        <div className="bg-white p-10 rounded-lg shadow flex justify-between">
            <button type="button" className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded text-white inline-flex focus:ring-2 ring-blue-700">
                Primary
            </button>
            <button type="button" className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white inline-flex focus:ring-2 ring-red-700">
                Danger
            </button>
            <button type="button" className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded text-white inline-flex focus:ring-2 ring-yellow-700">
                Warning
            </button>
            <button type="button" className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded text-white inline-flex focus:ring-2 ring-teal-700">
                Success
            </button>
            <button type="button" className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded text-white inline-flex focus:ring-2 ring-cyan-700">
                Info
            </button>
        </div>
    )
}