import React from "react";

export default function Map(){
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let i = arr.map((item,index) => index)

    console.log(i);

    return (
        <div>
            <ul>
                {arr.map((item,index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}