"use client";

import { stringify } from "querystring";
import { json } from "stream/consumers";
import { createClient } from "@supabase/supabase-js";

export default async function Home() {
  const apiKey = "ec4dcbe4ccbb42a565ba3c8863b8844a";
  const supabase = await createClient(
    "https://suajjpdsxhqkpzubqjam.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1YWpqcGRzeGhxa3B6dWJxamFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MDEzNDgsImV4cCI6MjA0ODM3NzM0OH0.xx4YVAqoYNEojS8VC7PXssqrY458NSDBryMwF-GQLIg"
  );
  var locationData;

  async function getLocation() {
    var locationInput = document.getElementById("locationInput").value;
    if (locationInput) {
      var data = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&appid=${apiKey}`
      );
      locationData = await data.json();
      locationData = JSON.stringify(locationData, undefined, 2);
      console.log(locationData);
      // locationData = JSON.parse(locationData);
      var lat = locationData.substring(
        locationData.indexOf('lat": ') + 6,
        locationData.indexOf('lat": ') + 13
      );
      var lon = locationData.substring(
        locationData.indexOf('lon": ') + 6,
        locationData.indexOf('lon": ') + 13
      );
      locationData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      locationData = await locationData.json();
      locationData = JSON.stringify(locationData, undefined, 2);

      console.log(locationData);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-around items-center flex-row">
      <div className="flex w-[200px] h-[200px] bg-white text-black rounded-[30px] flex-col justify-center items-center gap-[30px]">
        <p>Enter Location:</p>
        <input
          id="locationInput"
          className="text-black text-center w-[130px] rounded-lg ring-2 ring-black"
        ></input>
        <button
          onClick={getLocation}
          className="w-[100px] ring-2 ring-black rounded-lg hover:bg-sky-700/20"
        >
          <p className="text-center">Submit</p>
        </button>
      </div>
      <div className="w-[800px] h-[1000px] bg-white rounded-[30px]">
        <p className="text-black px-[15px] py-[10px]">{locationData}</p>
      </div>
    </div>
  );
}
