import { db } from "./src/db/client";
import { filiales } from "./src/db/schema";
import { eq } from "drizzle-orm";

async function main() {
  console.log("Updating MACOF Immobilier SARL image...");
  
  await db.update(filiales).set({
    image_url: "https://media.istockphoto.com/id/2151134721/photo/happy-group-of-business-people-standing.jpg?s=612x612&w=0&k=20&c=iTFwKo-IkwoBxrpb-BqwyUR6bK3DrCnnw3pB_wQN-O0="
  }).where(eq(filiales.slug, "immobilier"));

  console.log("Done.");
  process.exit(0);
}

main().catch(console.error);
