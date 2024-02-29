import React from 'react';

const Header = () => {
    return (
        <>
            <nav class="bg-white  border-gray-200 white:bg-gray-900 white:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  px-16">
                    <a href="/" class="flex items-center space-x-3 ">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Mj Ansari" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap white:text-white">Mj Ansari</span>
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 white:text-gray-400 white:hover:bg-gray-700 white:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white white:bg-gray-800 md:white:bg-gray-900 white:border-gray-700">
                            <li>
                                <a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:white:text-blue-500 white:bg-blue-600 md:white:bg-transparent" aria-current="page">Home</a>
                            </li>

                            <li>
                                <a href="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 white:text-white md:white:hover:text-blue-500 white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="/contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 white:text-white md:white:hover:text-blue-500 white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent">Contact</a>
                            </li>
                            <li>

                                <a href="/addBlog" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 white:text-white md:white:hover:text-blue-500 white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent">Add Blogs</a>

                            </li>
                            <li>
                                <a href="/login" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 white:text-white md:white:hover:text-blue-500 white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent">Login</a>

                            </li>
                            <li>
                                <a href="/signup" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 white:text-white md:white:hover:text-blue-500 white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent">SignUp</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header