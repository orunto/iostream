import Icon from '@/components/Icon';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
                            name='github'
                           />
                        </li>
                    </ul>

                </div>
            </header>


            <main>
                {/* Hero */}
                <section className='text-center'>
                    <h1 className='text-lg1'>
                        <span className='text-lg3'>Seamless <span className='text-grand'>Surveillance</span></span> <br/>
                    Elevate Monitoring with <br/> <span className='text-grand text-lg1'>IoT</span></h1>


                    <p className='text-lg4 grey mt-2'>With <span className='text-grand'>IOStream</span> you get to harness the power of <br/> IoT for real-time insights</p>
                    
                    <Link
                        className='hero-btn mt-5'
                        title='Navigate to monitor'
                        href={"/monitor"}>
                            <span className='text-grand text-lg3'>View Demo</span>
                    </Link>
                </section>
            </main>
        </>
    )
}
