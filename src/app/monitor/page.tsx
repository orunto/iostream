import Image from 'next/image';
import ToggleSwitch from '@/components/ToggleSwitch';

import pageStyle from '../../styles/page.module.css';


const Monitor = () => {
    return (
        <>
            <header className='d-flex justify-between'>
                {/* Logo */}
                <Image
                    height={50}
                    width={150}
                    src={"/images/logo/logo.svg"}
                    alt='IOStream Logo'
                />

                <div className='d-flex align-center c-gap--1 c-md-gap--2'>
                    <ul className='d-flex c-gap--1'>
                        <li>
                            <a
                                href='#'
                                className='icon'
                            >
                                DC
                            </a>
                        </li>

                        <li>
                            <a
                                href='#'
                                className='icon'
                            >
                                RE
                            </a>
                        </li>
                    </ul>


                    <div>
                        {/* Profile image */}
                        <span>Orunto</span>
                    </div>
                </div>
            </header>


            <main className=''>
                {/* Sensors data display*/}

                <section className='my-1 d-flex col row-md r-gap--2 align-center justify-between'>
                    {
                        [1,2,3].map((item)=>(
                            <article key={item} className='sensor-display'>
                                <div className='d-flex justify-content-between'>
                                    <span>Temp sensor</span>

                                    {/* Toggle switch */}
                                    <ToggleSwitch/>
                                </div>

                                <div className='text-center'>
                                    <span className='d-block'>24<sup>o</sup>C</span>
                                    <small>Temperature</small>
                                </div>
                            </article>
                        ))
                    }

                </section>



                <section className='mt-5 d-flex col row-md r-gap--2 justify-between'>
                    {/* Device info */}

                    <div>
                        <h3>Device information</h3>

                        {/* Device info */}
                    </div>



                    <div>
                        <h3>Update log</h3>

                        {/* Update log */}
                        <ul className='mt-1 log-list'>
                            {[1,2,3,4,5].map(item=>(
                                <li key={item} className='log-item'>
                                    {/* icons */}
                                    <small>Last updated</small>: sometime
                                </li>
                            ))}
                        </ul>

                    </div>


                </section>

            </main>

            <footer>
                &copy; Copyright IOStream, 2023.
            </footer>
        </>
    )
}


export default Monitor;