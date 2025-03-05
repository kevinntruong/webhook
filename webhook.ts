import express from "express";
import fs from "fs";

const app = express();
const port = 8080;

app.use(express.json());

app.post("/webhook", (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    console.log(res);

    try {
      const fileName = "payload.json";
      fs.writeFileSync(fileName, JSON.stringify(payload));
    } catch (error) {
      console.log("Error occurred while writing to file");
      console.log(error);
    }
    res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed");
  }
});

app.listen(port, () => {
  console.log(`Webhook running on port: ${port}`);
});
