import express from "express";
import { router as React } from "./React";
import { router as Vue } from "./Vue";
import { router as EJS } from "./EJS";

const app = express();

app.use("/", EJS);
app.use("/react", React);
app.use("/vue", Vue);

app.listen(8080);
