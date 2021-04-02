import { useState } from 'react';
import * as Button from '../button/Button';

export default function LoginForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitForm = event => {
        event.preventDefault()
        console.log(`${email} - ${password}`)
    }
    return(
        <div className="container">
            <div className="flex">
                <div className="w-full lg:w-1/3">
                    <div className="p-4 bg-gray shadow rounded-lg">
                        <form onSubmit={submitForm}>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm"> Email </label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"/>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm"> Password </label>
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"/>
                            </div>
                            <Button.primary type="submit"> Login </Button.primary>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}