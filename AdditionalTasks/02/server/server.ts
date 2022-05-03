import express from "express";

const app = express();

const Port: number = 3000;

app.get("/", (req, res) => {
  console.log("req.ip:", req.ip);
  const html: string = `
        <html lang="en">
        <head>
            <script src="app.js" async defer></script>
        </head>
        <body style="background-color: lightyellow">
            <div id="root"></div>
        </body>
        </html>
    `;
  res.send(html);
});

app.use(express.static("./built"));

app.listen(Port, () => {
  console.log(`Server in listening on port: ${Port}`);
});
