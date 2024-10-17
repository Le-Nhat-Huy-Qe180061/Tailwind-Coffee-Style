const Header = () => {
    return (
        <>
            <header className='py-6 mx-10'>
                <nav className='flex flex-row items-center justify-between '>
                    <div className='text-xl font-bold text-center cursor-pointer logo basis-2/6'>
                        CoffeeStyle
                    </div>

                    <ul className='flex items-center gap-8 text-sm font-medium text-gray-500 uppercase justify-normal basis-3/6'>
                        <li className='nhd-top-menu-item'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='nhd-top-menu-item'>
                            <a href='#'>Products</a>
                        </li>
                        <li className='nhd-top-menu-item'>
                            <a href='#'>Blog</a>
                        </li>
                        <li className='nhd-top-menu-item'>
                            <a href='#'>About</a>
                        </li>
                        <li className='nhd-top-menu-item'>
                            <a href='#'>StyleGuide</a>
                        </li>
                        <li className='nhd-top-menu-item'>
                            <a
                                href='https://github.com/Le-Nhat-Huy-Qe180061/Tailwind-Coffee-Style.git'
                                target='blank'
                            >
                                NhatHuyDev
                            </a>
                        </li>
                    </ul>

                    <ul className='flex justify-start ml-16 text-sm font-medium text-gray-500 uppercase basis-1/6'>
                        <li className='nhd-top-menu-item'>
                            <a href='#' className='flex items-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='size-6 nhd-icon'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                                    />
                                </svg>

                                <span className='mx-2'>Cart</span>
                                <span className='text-white bg-orange-400 nhd-badge-circle'>
                                    99+
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
