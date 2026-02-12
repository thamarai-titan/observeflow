// src/server.ts

import app from "./app";

const PORT: number = parseInt(process.env.PORT || "5000", 10);

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();