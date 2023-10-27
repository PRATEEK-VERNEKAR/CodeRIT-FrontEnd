import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
       <div className="grid grid-cols-2 gap-2 p-3 w-full  min-h-[300px]">
         <div className="border-2 border-amber-500 flex justify-center align-center">
          <Image src="/Logo.png" width={520} height={10}/>    
         </div>
         <div  className="border-2 border-amber-500 break-words">
            abckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckadaabckada 
         </div>
       </div>
      </div>
    </>
  )
}
