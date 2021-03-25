import { Router } from "express";
import { readFile } from "fs/promises";
import { Component, createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";

const app: Component = {
  setup() {
    return { appName: "Vue app" };
  },
}

export const router = Router();

router.get("/", async (_, res) => {
  app.template = app.template ?? (await readFile("./vue.template.html")).toString("utf-8").trim();
  const html = await renderToString(createSSRApp(app));
  res.writeHead(200, { "content-type": "text/html" }).end(html);
});
