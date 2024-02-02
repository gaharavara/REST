import express from "express";
const app = express();
const port = 3000;
import healthRouter from "./routers/health";
import { errorHandler, addTimestamp, logger } from "./middlewares";

app.use(express.json());
app.use(addTimestamp);
app.use(logger)

app.use("/health", healthRouter);
app.use("/test-error", (req, res) => {
    throw Error("Servers are burning");
});

app.get("/:id", (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Method: ${JSON.stringify(req.method)}`);
    res.status(200).header({"X-Custom-Header": "foo", "X-Custom-Header-2": "fuu"}).send(`Hello ${req.query.id}`);
})

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}🚀`);
});