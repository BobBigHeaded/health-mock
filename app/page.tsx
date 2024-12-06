"use client";

import { stringify } from "querystring";
import { json } from "stream/consumers";
import { createClient } from "@supabase/supabase-js";
import LocationInput from "@/component/LocationInput";
import { useState } from "react";

export default async function Home() {
  var locationData = "DATA!!!";
  var [locationInput, setLocationInput] = useState("");

  return (
    <div className="w-screen h-screen flex justify-around items-center flex-row">
      <div className="flex w-[200px] h-[200px] bg-white text-black rounded-[30px] flex-col justify-center items-center gap-[30px]">
        <p>Enter Location:</p>
        <input
          id="locationInput"
          className="text-black text-center w-[130px] rounded-lg ring-2 ring-black"
        ></input>
        <LocationInput locationInput={locationInput} />
      </div>
      <div className="w-[800px] h-[1000px] bg-white rounded-[30px]">
        <p className="text-black px-[15px] py-[10px]">{locationData}</p>
      </div>
    </div>
  );
}
