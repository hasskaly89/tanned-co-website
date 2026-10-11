import JsonLd from "@/components/JsonLd";
import { serviceSchema, studioListSchema } from "@/lib/schema";

// Home page structured data: the 5 studios and the 3 plans shown in the pricing
// section. Organization and WebSite are in the root layout. No aggregateRating.
export default function HomeSchema() {
  return <JsonLd data={[studioListSchema(), serviceSchema(["casual", "tenPack", "glowClub"])]} />;
}
