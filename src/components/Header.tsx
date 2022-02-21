import Nav from './Nav';
import MenuIcon from './ui/MenuIcon';

const Header = () => {

    return (
        <header>
            <div className='masthead bg-royal-blue text-white px-2 py-8 relative overflow-x-hidden'>
                <div className='bg-outer-circle bg-white opacity-30 rounded-full absolute -right-20 -top-20 grid content-center z-30 md:-z-20'>
                    <div className='bg-inner-circle rounded-full bg-royal-blue inline-block mx-auto'></div>
                </div>
                <div className='bg-lines--vertical absolute left-0 right-0 top-0 bottom-0 m-auto'></div>
                <div className='container max-w-screen-lg mx-auto flex items-center justify-between relative z-1'>
                    <a href="/" className='font-semibold text-xl py-2 relative z-50'>Rideaway</a>
                    <MenuIcon />
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header