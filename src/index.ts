import express from "express";
import swaggerIu from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerIu.serve, swaggerIu.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
