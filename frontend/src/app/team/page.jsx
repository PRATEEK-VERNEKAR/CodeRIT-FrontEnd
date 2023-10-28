import Card from "@/src/Card/Card"
import Faculty from "./Faculty"
import Seniors from "./Seniors"

export default function Team(){
    return(
        <div className="pt-[100px] ">
            <div className="bg-blue-300 mx-4 p-4">
                <h1 className="text-center text-4xl p-4">The Faculty</h1>
                <div className="grid grid-cols-3 gap-3 justify-center">
                    {
                        Faculty.map((ele)=>{
                            return(
                                <Card person={ele}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-red-300 mx-4 p-4">
                <h1 className="text-center text-4xl p-4">Senior Core</h1>
                <div className="grid grid-cols-4 gap-3">
                    {
                        Seniors.map((ele)=>{
                            return(
                                <Card person={ele}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-orange-300 mx-4 p-4">
                <h1 className="text-center text-4xl p-4">Junior Core</h1>
                <div className="grid grid-cols-4 gap-3">
                    {/* <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                </div>
            </div>

        </div>
    )
}