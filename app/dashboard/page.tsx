import {createClient} from "@/utils/supabase/server";
import {fetchGeocodedLocationData, fetchWeatherData} from "@/components/getLocationData";
import {GeocodeResult} from "@/components/GeocodeResultSchema";
import {WeatherData} from "@/components/WeatherDataSchema";
import React from "react";

export default async function Dashboard(props: any) {

    const supabase = await createClient();
    const {data: id} = await supabase.rpc('get_trigger_id', {temp: 50, hum: 60, pol: 50});
    let placeID = "ChIJoagHVPPkfkgRFnbDyI5iDto";

    const placeName: string | undefined = props.searchParams?.placeName;
    let placeData: GeocodeResult | null = null;
    if (placeName !== undefined && placeName !== null) {
        placeData = await fetchGeocodedLocationData(placeName);
    }

    return (
        <div className="flex flex-1">
            {/*left side of page*/}
            <div className="flex flex-1 justify-center items-center flex-col gap-[50px]">
                <div className={"flex flex-col items-center gap-[10px]"}>
                    <form className={"flex flex-col items-center gap-[10px]"}>
                        <input
                            className={"h-[70px] w-[400px] text-2xl px-[20px] rounded-[40px] border-2 border-[#0A5F94]"}
                            type={"text"} id={"placeName"} placeholder={"Enter a location"} name="placeName" autoComplete={"off"}/>

                        <button
                            className={"border-2 border-[#0A5F94] rounded-[20px] h-[27px] w-[80px] bg-white hover:bg-[#ececec] transition-all"}
                            type={"submit"}>
                            <p className={"text-center"}>SUBMIT</p>
                        </button>
                    </form>

                </div>

                <div>
                    <Map placeData ={placeData}></Map>
                </div>
            </div>

            {/*right side of page*/}
            <EnvironmentalConditons placeData={placeData} />
        </div>
    );
}

function Map(props : {placeData: GeocodeResult | null}) {
    if (props.placeData == null) {
        return null
    }if (props.placeData.results.length == 0){
        return null;
    }return (
        <iframe className="border-2 border-[#0A5F94] rounded-[20px]" width="600" height="450"
                      loading="lazy" id={"map"} allowFullScreen
                      src={`https://www.google.com/maps/embed/v1/place?q=place_id:${props.placeData.results.at(-1).place_id}&key=AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY`}></iframe>
    )
}

async function EnvironmentalConditons(props : {placeData: GeocodeResult | null}) {
    if (props.placeData == null) {
        return null
    }if (props.placeData.results.length == 0){
        return null;
    }

    let weatherData: WeatherData | null = null;
    weatherData = await fetchWeatherData(props.placeData.results.at(-1).geometry.location.lng, props.placeData.results.at(-1).geometry.location.lat);

    const supabase = await createClient();
    const {data: id} = await supabase.rpc('get_trigger_id', {temp: (weatherData.main.temp), hum: (weatherData.main.humidity), pol: 0});

    return (
        <div className="flex-1 flex items-center justify-center flex-col">
            <div className="bg-[#0A5F94] border-[4px] border-[#1186CF] h-[600px] w-[450px] rounded-[40px]">
                {/* generate all possible conditions */}
                {/* create SQL to return actual data then use .map to create the list of items e.g. items.map() => {} */}
                {}
            </div>
        </div>
    )
}