import express from "express";
import cors from "cors";
import { dbCreate, AppDataSouce } from "./db";
import { appRouter } from "./routes";
import { errorHandlerMiddleware, routeMiddleware } from "./middlewares";
import { Env } from "./env";
// import requestIP from "request-ip-check";

const setupServer = async () => {
  try {
    console.log("SKIP_DB_SETUP:", Env.skipDbSetup); // Add debug log
    if (!Env.skipDbSetup) {
      console.log("Initializing database..."); // Add debug log
      await dbCreate();
      await AppDataSouce.initialize();
    } else {
      console.log("Skipping database setup.");
    }
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(routeMiddleware);
    // app.use(requestIP.mw());
    app.use("/health", (_req, res) => {
      res.json({ msg: "Hello World" });
    });
    app.use("/api/v1", appRouter);
    app.use(errorHandlerMiddleware);

    const { port } = Env;

    app.listen(port, () => {
      console.log(`Server is listening on ${port}.`);
    });
  } catch (error) {
    console.error("Error setting up the server:", error);
  }
};

setupServer();
