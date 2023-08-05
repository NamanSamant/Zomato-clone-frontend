import React from "react";

const SignUpPage = () => {
    return (
        <>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-zomato-600 uppercase">
                        Sign up
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="Full name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Full name
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-zomato-400 focus:ring-zomato-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-zomato-400 focus:ring-zomato-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="Phone Number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Phone number
                            </label>
                            <input
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-zomato-400 focus:ring-zomato-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-zomato-400 focus:ring-zomato-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="Confirm password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Confirm password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-zomato-400 focus:ring-zomato-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="Full Address"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Full Address
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-zomato-400 focus:ring-zomato-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            <div className="mb-2">
                            <label
                                for="reciever"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                For
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-zomato-400 focus:ring-zomato-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-zomato-400 rounded-md hover:bg-zomato-600 focus:outline-none focus:bg-zomato-600">
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                        <div className="absolute px-5 bg-white">Or</div>
                    </div>
                    <div className="flex mt-4 gap-x-2">
                        <button
                            type="button"
                            className="flex items-center justify-center w-full p-2 border border-zomato-800 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-zomato-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current text-zomato-600"
                            >
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;