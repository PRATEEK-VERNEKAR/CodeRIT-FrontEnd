import Image from "next/image";


export default function Card({person}){
    return(
        <div className="flex justify-center items-center">
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5 flex flex-col items-center">
                    <Image src={person.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '200px', height: '200px' }}
                    className="rounded-full"/>
                    <h1 className="text-3xl text-white p-4">{person.name}</h1>
                    {/* <p>{person.desc}</p> */}
                    <a href={person.url} className="text-white">Read More...</a>
                    <a></a>
                </div>
            </div>
        </div>
    )
}