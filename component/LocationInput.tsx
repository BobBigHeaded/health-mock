"use client";

const LocationInput = () => {
  const apiKey = "";
  var locationData;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex w-[200px] h-[200px] bg-white text-black rounded-[30px] flex-col justify-center items-center gap-[30px]">
        <p>Enter Location:</p>
        <input className="text-black text-center w-[130px] rounded-lg ring-2 ring-black"></input>
        <button
          onClick={async () =>
            (locationData = await fetch(
              `http://api.openweathermap.org/geo/1.0/direct?q={}&appid={apiKey}`
            ))
          }
          className="w-[100px] ring-2 ring-black rounded-lg hover:bg-sky-700/20"
        >
          <p className="text-center">Submit</p>
        </button>
      </div>
    </div>
  );
};

export default LocationInput;
