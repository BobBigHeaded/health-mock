import * as z from "zod";


export const AddressComponentSchema = z.object({
    "long_name": z.string(),
    "short_name": z.string(),
    "types": z.array(z.string()),
});
export type AddressComponent = z.infer<typeof AddressComponentSchema>;

export const LocationSchema = z.object({
    "lat": z.number(),
    "lng": z.number(),
});
export type Location = z.infer<typeof LocationSchema>;

export const BoundsSchema = z.object({
    "northeast": LocationSchema,
    "southwest": LocationSchema,
});
export type Bounds = z.infer<typeof BoundsSchema>;

export const GeometrySchema= z.object({
    "bounds": BoundsSchema,
    "location": LocationSchema,
    "location_type": z.string(),
    "viewport": BoundsSchema,
});
export type Geometry = z.infer<typeof GeometrySchema>;

export const ResultSchema = z.object({
    "address_components": z.array(AddressComponentSchema),
    "formatted_address": z.string(),
    "geometry": GeometrySchema,
    "place_id": z.string(),
    "types": z.array(z.string()),
});
export type Result = z.infer<typeof ResultSchema>;

export const GeocodeResultSchema = z.object({
    "results": z.array(ResultSchema),
    "status": z.string(),
});
export type GeocodeResult = z.infer<typeof GeocodeResultSchema>;
