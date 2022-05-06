//* https://github.com/vercel/next.js/blob/canary/examples/custom-server-express/server.js

//@ts-ignore
const express = require("express");
const next = require("next");

// import express from "express";
// import next from "next";

const dev: boolean = process.env.NODE_ENV !== "production"; // Create the Express-Next App
const hostname: string = "localhost";
const port: number = 3000;

const app = next({dev, hostname, port});

console.log("app:", app);

const handle = app.getRequestHandler(); //Start the app

app
  .prepare() //Start Express server and serve the
  .then(() => {
    const server = express();
    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (error: string) => {
      if (error) {
        console.error("error:", error);
        throw error;
      }
      console.log(`> Ready on ${hostname}:${port}`);
    });
  })
  .catch((ex: {stack: string}) => {
    console.error("ex.stack:", ex.stack);
    process.exit(1);
  });
