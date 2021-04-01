import * as Button from '../button/Button';

export default function LoginCard(){
    return(
        <div className="container">
            <div className="flex">
                <div className="w-full lg:w-1/3">
                    <div className="p-4 bg-gray shadow rounded-lg">
                        <form>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm"> Email </label>
                                <input type="email" name="" id="" className="w-full border shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition duration-200 rounded-lg h-10 focus:outline-none px-3"/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm"> Gender </label>
                                <select className="w-full border shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition duration-200 rounded-lg h-10 focus:outline-none px-3" name="" id="">
                                    <option value=""> Male </option>
                                    <option value=""> Female </option>
                                </select>
                            </div>
                            <Button.primary> Login </Button.primary>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}