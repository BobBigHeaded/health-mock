import React from "react";
import { createClient } from "@supabase/supabase-js";

interface LocationInputProps {
  locationInput: string;
}

async function LocationInput({ locationInput }: LocationInputProps) {
  const apiKey = "ec4dcbe4ccbb42a565ba3c8863b8844a";
  const supabase = await createClient(
    "https://suajjpdsxhqkpzubqjam.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1YWpqcGRzeGhxa3B6dWJxamFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MDEzNDgsImV4cCI6MjA0ODM3NzM0OH0.xx4YVAqoYNEojS8VC7PXssqrY458NSDBryMwF-GQLIg"
  );
  var locationData;

  async function getLocation() {
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
    <button
      onClick={getLocation}
      className="w-[100px] ring-2 ring-black rounded-lg hover:bg-sky-700/20"
    >
      <p className="text-center">Submit</p>
    </button>
  );
}

export default LocationInput;
