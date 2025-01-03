import { createClient } from "@supabase/supabase-js";

export default async function Dashboard() {
  const supabaseUrl = "https://suajjpdsxhqkpzubqjam.supabase.co";
  const supabase = await createClient(
    supabaseUrl,
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1YWp
    qcGRzeGhxa3B6dWJxamFtIiwicm9sZSI6ImFub2
    4iLCJpYXQiOjE3MzI4MDEzNDgsImV4cCI6MjA0O
    DM3NzM0OH0.xx4YVAqoYNEojS8VC7PXssqrY458
    NSDBryMwF-GQLIg`
  );
  const { data: conditions } = await supabase.from("conditions").select("*");
  return <pre>{JSON.stringify(conditions, null, 2)}</pre>;

  return (
    <div className="flex flex-1 flex-row px-[30px] gap-[60px]">
      <div className="flex flex-1 justify-center items-center">
        <div className="flex min-h-[400px] w-full justify-center items-center bg-white rounded-full">
          djaidow
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <div className="flex justify-center items-center h-[800px] w-full bg-white rounded-[60px] border border-[#0A5F94] border-[5px]">
          <div></div>
        </div>
      </div>
    </div>
  );
}
