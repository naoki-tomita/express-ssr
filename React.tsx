import { Router } from "express";
import React, { FC } from "react";
import { renderToString } from "react-dom/server";

export const router = Router();

const ReactApp: FC<{ appName: string }> = ({ appName }) => {
  return (
    <h1><a href="/">{appName}</a></h1>
  );
}

const Html: FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>ReactApp</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

router.get("/", async (_, res) => {
  res
    .writeHead(200, { "content-type": "text/html" })
    .end(renderToString(<Html><ReactApp appName="React app" /></Html>))
});
