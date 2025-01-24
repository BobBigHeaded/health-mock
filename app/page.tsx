import  {createClient} from '@/utils/supabase/server'

export default async function Home() {

    const  supabase = await createClient();
    const { data: id } = await supabase.rpc('get_trigger_id', {temp: 50, hum: 60, pol: 50});

  return (
    <div>
      <pre>{JSON.stringify(id, null, 2)}</pre>
    </div>
  );
}
