"use client"
import React from "react";

const getLocationData: React.FC<getLocationProps> = ({ type }) => {

    let placeID = null

    async function inputLocation(){
        const response  = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${(document.getElementById("placeName") as HTMLInputElement).value}&key=AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY`, {})
        const data = await response.json();
        // @ts-ignore
        placeID = data.id;
    }

    return(
        <button className={"border-2 border-black rounded-lg h-[27px] w-[80px]"} onClick={inputLocation}>
            <p className={"text-center"}>SUBMIT</p>
        </button>
    );
};
export default { getLocationData };