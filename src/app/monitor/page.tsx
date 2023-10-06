import Image from 'next/image';
import ToggleSwitch from '@/components/ToggleSwitch';

import pageStyle from '../../styles/page.module.css';
import Icon from '@/components/Icon';


const Monitor = () => {
    return (
        <>
            <header className='d-flex justify-between'>
                {/* Logo */}
                <div className='logo'>
                    <Image
                        height={50}
                        width={150}
                        src={"/images/logo/logo.svg"}
                        alt='IOStream Logo'
                    />
                </div>

                <div className='d-flex align-center c-gap--1 c-md-gap--2'>
                    <ul className='d-flex c-gap--1'>
                        <li>
                           <Icon
                            name='doc'
                           />
                        </li>

                        <li>
                            <Icon
                                name='refresh'
                                // animation="rotate"
                                title="Updating..."
                           />
                        </li>
                    </ul>


                    <div>
                        {/* Profile image */}
                        <span className='text-bold'>Orunto</span>
                    </div>
                </div>
            </header>


            <main className=''>
                {/* Sensors data display*/}

                <section className='my-1 d-flex col row-md r-gap--2 align-center justify-evenly'>
                    {
                        [1,2,3].map((item)=>(
                            <article key={item} className='sensor-display'>
                                <div className='d-flex justify-between'>
                                    <span className='text-x1'>Temp sensor</span>

                                    {/* Toggle switch */}
                                    <ToggleSwitch on/>
                                </div>

                                <div className='text-center mt-3'>
                                    <span className='text-grand'>24<sup>o</sup>C</span>
                                    <small className='text-s1 grey'>Temperature</small>
                                </div>
                            </article>
                        ))
                    }

                </section>



                <section className='mt-5 d-flex col row-md r-gap--2 justify-between'>
                    {/* Device info */}

                    <div className='mt-5'>
                        <h3>Device information</h3>

                        {/* Device info */}
                        <div className='mt-1 device d-flex c-gap--2'>
                            <Icon
                                name='chip'
                            />

                            <div>
                                <span>Arduino xxx</span>
                            </div>
                            
                        </div>
                    </div>



                    <div className='mt-5'>
                        <h3>Update log</h3>

                        {/* Update log */}
                        <ul className='mt-1 log-list'>
                            {[1,2,3,4,5].map(item=>(
                                <li key={item} className='d-flex align-center log-item'>
                                    {/* icons */}
                                    <Icon
                                        name="server"
                                    />
                                    <div>
                                        <small className='text-italic text-s1 grey text-bold'>Last updated</small>
                                        <br/>
                                        <span className='mt-1'>sometime</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>


                </section>

            </main>

            <footer>
                <span className='text-italic grey text-s1'>&copy; Copyright IOStream, 2023. Powered by <a href='https://nobox.cloud'>Nobox</a></span>
            </footer>
        </>
    )
}


export default Monitor;