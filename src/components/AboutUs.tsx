import AboutUsImage from '../images/About Us Image.png';

const AboutUs = () => {
    return (
        <section className='aboutus my-10'>
            <div className='bg-white px-2 py-8'>
                <div className='container max-w-screen-lg mx-auto md:grid md:grid-cols-2'>
                    <div className='-ml-10 pr-10'>
                       <img className='mx-auto' src={AboutUsImage} />
                    </div>
                    <div className='pl-10'>
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <a href="/" className='inline-block my-4 px-5 py-2 rounded-full bg-royal-blue text-white font-semibold my-2'>Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs