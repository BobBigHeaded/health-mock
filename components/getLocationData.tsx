import React from "react";
import {GeocodeResult, GeocodeResultSchema} from "@/components/GeocodeResultSchema";
import {WeatherData, WeatherDataSchema} from "@/components/WeatherDataSchema";

const GOOGLEAPIS_KEY = "AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY"
const OPENWEATHER_KEY = "ec4dcbe4ccbb42a565ba3c8863b8844a"

export const fetchGeocodedLocationData = async (locationName: string) => {
    const response  = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${GOOGLEAPIS_KEY}`);
    const jsonBody = await response.json();
    return GeocodeResultSchema.parse(jsonBody) as GeocodeResult;
}

export const fetchWeatherData = async (lon : number, lat : number) => {
    const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}`);
    const jsonBody = await reponse.json();
    return WeatherDataSchema.parse(jsonBody) as WeatherData;
}
