import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => 
{
    const { data: session, status } = useSession()

    if (status === "authenticated") /* user is already logged in */
    {
        redirect('/');
    }

    return(
        <div 
            className="flex grow h-full w-screen content-center text-white"
        >
            <div 
                className="flex flex-col mx-auto my-auto px-5 py-4 bg-gray-800 rounded-2xl border-white border-2"
            >
                <span
                    className="w-full font-bold text-3xl text-center"
                >
                    Login using 
                </span>
                <br className="inline" />
                <Link 
                    href={'/api/auth/callback/github'} 
                    className="w-full md:w-96 py-2 px-4 text-white bg-gray-900 mb-4 rounded-xl border-2 border-gray-600 items-center flex flex-row hover:scale-105 hover:bg-gray-700 hover:ease-in duration-200 hover:border-white"
                >
                    <span
                        className="text-xl font-medium ml-auto mr-4"
                    >
                        GitHub
                    </span>
                    <svg 
                        className="w-8 h-8 fill-white mr-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                    >
                        <path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                    </svg>
                </Link>
                <Link 
                    href={'/api/auth/callback/discord'} 
                    className="w-full md:w-96 py-2 px-4 text-white bg-indigo-600 rounded-xl border-2 border-white items-center flex flex-row hover:scale-105 hover:bg-indigo-700 hover:ease-in duration-200"
                >
                    <span
                        className="text-xl font-medium ml-auto mr-4"
                    >
                        Discord
                    </span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 127.14 96.36"
                        className="w-8 h-8 fill-white mr-auto"
                    >
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Login;