export default function ResponsiveGrid(){
    return(
        <div className="min-h-screen items-center justify-center flex bg-gray-200">
            <div className="w-full lg:w-3/4">
                <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-500 w-full h-32"></div>
                        <div className="bg-gray-500 w-full h-32"></div>
                        <div className="bg-gray-500 w-full h-32"></div>
                        <div className="bg-gray-500 w-full h-32"></div>
                        <div className="bg-gray-500 w-full h-32"></div>
                        <div className="bg-gray-500 w-full h-32"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}