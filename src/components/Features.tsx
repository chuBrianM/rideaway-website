import Button from './ui/Button';

import AddFriendsImg from '../images/Add Friends.png';
import KeepTrackImg from '../images/Keep Track.png';
import PlanRoutesImg from '../images/Plan Routes.png';
import SeparatedImg from '../images/Separated.png';

const Features = () => {
    return (
        <section className='aboutus my-10'>
            <div className='bg-porcelain px-2 py-8 relative'>
                <div className='bg-lines--horizontal left-0 right-0 top-0 bottom-0 absolute -z-50'></div>
                <div className='relative z-1'>
                    <h2 className='text-center mb-10 text-3xl'>Features</h2>
                    <div className='container max-w-screen-lg mx-auto grid md:grid-cols-2 mb-20'>
                        <div className='relative grid content-center'>
                            <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                            <img alt='' src={KeepTrackImg} className='features__image mx-auto relative z-1' />
                        </div>
                        <div className='md:pl-10 grid content-center'>
                            <div className='inline-block text-center md:text-left'>
                                <h3 className='text-2xl'>Keep Track of Where Everyone Is In Your Group Ride</h3>
                                <p className='my-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <Button href='/' title='Learn More' type='secondary' buttonColor='royal-blue' />
                            </div>
                        </div>
                    </div>

                    <div className='container max-w-screen-lg mx-auto grid md:grid-cols-2 mb-20'>
                        <div className='order-2 md:order-1 md:pl-10 grid content-center'>
                            <div className='inline-block text-center md:text-left'>
                                <h3 className='text-2xl'>Know When Someone Has Separated Real-Time</h3>
                                <p className='my-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <Button href='/' title='Learn More' type='secondary' buttonColor='royal-blue' />
                            </div>
                        </div>
                        <div className='order-1 md:order-2 relative grid content-center'>
                            <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                            <img alt='' src={SeparatedImg} className='features__image mx-auto relative z-1' />
                        </div>
                    </div>

                    <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2 mb-20'>
                        <div className='relative grid content-center'>
                            <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                            <img alt='' src={AddFriendsImg} className='features__image mx-auto relative z-1' />
                        </div>
                        <div className='md:pl-10 grid content-center'>
                            <div className='inline-block text-center md:text-left'>
                                <h3 className='text-2xl'>Easily Invite Participants</h3>
                                <p className='my-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <Button href='/' title='Learn More' type='secondary' buttonColor='royal-blue' />
                            </div>
                        </div>
                    </div>

                    <div className='container max-w-screen-lg mx-auto grid md:grid-cols-2 mb-5'>
                        <div className='order-2 md:order-1 md:pl-10 grid content-center'>
                            <div className='inline-block text-center md:text-left'>
                                <h3 className='text-2xl'>Keep Track of Where Everyone Is In Your Group Ride</h3>
                                <p className='my-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <Button href='/' title='Learn More' type='secondary' buttonColor='royal-blue' />
                            </div>
                        </div>
                        <div className='order-1 md:order-2 relative grid content-center mb-5'>
                            <div className='features__image-background bg-royal-blue rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                            <img alt='' src={PlanRoutesImg} className='features__image mx-auto relative z-1' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features