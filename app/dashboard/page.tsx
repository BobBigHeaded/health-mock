import {createClient} from "@/utils/supabase/server";
import getLocationData from "@/components/getLocationData";
import fetch from 'node-fetch';

export default async function Dashboard() {

    const  supabase = await createClient();
    const { data: id } = await supabase.rpc('get_trigger_id', {temp: 50, hum: 60, pol: 50});
    let placeID = "ChIJoagHVPPkfkgRFnbDyI5iDto";

    async function inputLocation(){
        const response  = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${(document.getElementById("placeName") as HTMLInputElement).value}&key=AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY`, {})
        const data = await response.json();
        // @ts-ignore
        placeID = data.id;
    }

  return (
      <div className="flex flex-1">
          {/*left side of page*/}
          <div className="flex flex-1 justify-center items-center flex-col gap-[50px]">
              <div className={"flex flex-col items-center gap-[10px]"}>
                  <input className={"h-[70px] w-[400px] text-2xl px-[20px] rounded-[40px] border-2 border-[#0A5F94]"} type={"text"} id={"placeName"} placeholder={"Enter a location"}/>

                  <getLocationData></getLocationData>
              </div>

              <div>
                  <iframe className="border-2 border-[#0A5F94] rounded-[20px]" width="600" height="450" loading="lazy" allowFullScreen
                          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeID}&key=AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY`}></iframe>
              </div>
          </div>

          {/*right side of page*/}
          <div className="flex-1">

          </div>
      </div>
  );
}
