"use client"
import React from "react";

export default function GetLocationData() {

    // return the geocoding info (lat and lon)

    async function inputLocation(){
        const response  = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${(document.getElementById("placeName") as HTMLInputElement).value}&key=AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY`, {})
        const data = await response.json();
        console.log(data.location);
    }

    return(
        <button className={"border-2 border-[#0A5F94] rounded-[20px] h-[27px] w-[80px] bg-white hover:bg-[#ececec] transition-all"} onClick={inputLocation}>
            <p className={"text-center"}>SUBMIT</p>
        </button>
    );
};