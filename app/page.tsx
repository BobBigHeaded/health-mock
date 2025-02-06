import  {createClient} from '@/utils/supabase/server'

export default async function Home() {

    const  supabase = await createClient();
    const { data: id } = await supabase.rpc('get_trigger_id', {temp: 50, hum: 60, pol: 50});

    let placeID = "ChIJoagHVPPkfkgRFnbDyI5iDto";

  return (
    <div>
      <pre>{JSON.stringify(id, null, 2)}</pre>

        <input type={"text"} id={"placeName"} placeholder={"Enter a location"}/>

        <div>
            <iframe className="border-2 border-black" width="600" height="450" loading="lazy" allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeID}&key=AIzaSyBVi1ZzmsMZb0M-w8mTg1i1yKpQGljO2dY`}></iframe>
        </div>
    </div>
  );
}
