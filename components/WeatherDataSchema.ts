import * as z from "zod";


export const CloudsSchema = z.object({
    "all": z.number(),
});
export type Clouds = z.infer<typeof CloudsSchema>;

export const CoordSchema = z.object({
    "lon": z.number(),
    "lat": z.number(),
});
export type Coord = z.infer<typeof CoordSchema>;

export const MainSchema = z.object({
    "temp": z.number(),
    "feels_like": z.number(),
    "temp_min": z.number(),
    "temp_max": z.number(),
    "pressure": z.number(),
    "humidity": z.number(),
    "sea_level": z.number(),
    "grnd_level": z.number(),
});
export type Main = z.infer<typeof MainSchema>;

export const SysSchema = z.object({
    "type": z.number(),
    "id": z.number(),
    "country": z.string(),
    "sunrise": z.number(),
    "sunset": z.number(),
});
export type Sys = z.infer<typeof SysSchema>;

export const WeatherSchema = z.object({
    "id": z.number(),
    "main": z.string(),
    "description": z.string(),
    "icon": z.string(),
});
export type Weather = z.infer<typeof WeatherSchema>;

export const WindSchema = z.object({
    "speed": z.number(),
    "deg": z.number(),
});
export type Wind = z.infer<typeof WindSchema>;

export const WeatherDataSchema = z.object({
    "coord": CoordSchema,
    "weather": z.array(WeatherSchema),
    "base": z.string(),
    "main": MainSchema,
    "visibility": z.number(),
    "wind": WindSchema,
    "clouds": CloudsSchema,
    "dt": z.number(),
    "sys": SysSchema,
    "timezone": z.number(),
    "id": z.number(),
    "name": z.string(),
    "cod": z.number(),
});
export type WeatherData = z.infer<typeof WeatherDataSchema>;
