// backend/src/index.ts
import { app } from "../../server";

const PORT = process.env.PORT || 4000;

// Only start the server locally if this is NOT Vercel
if (process.env.VERCEL === undefined) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app; 
