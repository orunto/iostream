'use client';
import Image from 'next/image';
import ToggleSwitch from '@/components/ToggleSwitch';

import Icon from '@/components/Icon';
import { devices, sensors } from '@/config/storage';
import Metric from '@/components/Metric';
import Logs from '@/components/Logs';
import useSensorContext from '@/context/Sensor';


const Monitor = () => {
    const {status} = useSensorContext();
    const isLoading = status === 'loading';
    return (
        <>
            <header className='d-flex justify-between'>
                {/* Logo */}
                <a className='logo' href='/'>
                    <Image
                        height={50}
                        width={150}
                        src={"/images/logo/logo.svg"}
                        alt='IOStream Logo'
                    />
                </a>

                <div className='d-flex align-center c-gap--1 c-md-gap--2'>
                    <ul className='d-flex c-gap--1'>
                        <li>
                           <Icon
                            name='doc'
                            link='https://github.com/orunto/iostream/tree/main#readme'
                           />
                        </li>

                        <li>
                            <Icon
                                name='refresh'
                                animation={ isLoading ? 'rotate' : '' }
                                title={ isLoading ? "Synchronizing..." : ''}
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
                        sensors.map((item, index)=>(
                            <article key={index} className={'sensor-display ' + (!Boolean(item.record.query) && 'disabled')}>
                                <div className='d-flex justify-between'>
                                    <span className='text-x1'>{item.metric}</span>

                                    {/* Toggle switch */}
                                    <ToggleSwitch on={Boolean(item.record.query)}/>
                                </div>

                                <div className='text-center mt-3'>
                                    <Metric/>
                                    <small className='text-s1 grey'>{item.name}</small>
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
                        {devices.map((item, index)=>(
                            <div key={index} className='mt-1 device d-flex c-gap--2'>
                                <Icon
                                    name='chip'
                                />

                                <div>
                                    <span>Arduino {item.type}</span>
                                </div>
                                
                            </div>
                        ))}
                        
                    </div>



                    <div className='mt-5'>
                        <h3>Update log</h3>

                        {/* Update log */}
                        <Logs/>

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