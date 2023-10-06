import Image from "next/image";


type IconProps = {
    name: string,
    link?: string,
    action?: Function
}


const Icon = (props:IconProps) => {

    const image = <Image
                    src={`/images/icons/${props.name}.svg`}
                    alt="icon"
                    width={80}
                    height={80}
                />
    
    if (props.link) {
        return (
            <a href={props.link || '#'} className='icon'>
                {image}
            </a>
        )
    }


    return (
        <button className='icon'>
            {image}
        </button>
    )
}


export default Icon;