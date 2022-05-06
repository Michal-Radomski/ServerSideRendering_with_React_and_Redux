const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production"; // Create the Express-Next App
const app = next({dev});

const handle = app.getRequestHandler(); //Start the app

app
  .prepare() //Start Express server and serve the
  .then(() => {
    const server = express();
    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(3000, (error: string) => {
      if (error) {
        console.error("error:", error);
        throw error;
      }

      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex: {stack: string}) => {
    console.error("ex.stack:", ex.stack);
    process.exit(1);
  });
