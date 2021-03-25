import { readFile } from "fs/promises";
import { render } from "ejs";
import { Router } from "express";

export const router = Router();

router.get("/", async (req, res) => {
  res
    .writeHead(200, {"content-type": "text/html"})
    .end(render((await readFile("./ejs.template.ejs")).toString(), { appName: "EJS Template" }));
});
