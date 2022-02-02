import "reflect-metadata";
import express from "express";

const app = express();

app.get("/api/test", (request, response) => {
  return response.send('teste get')
})

app.post("/api/test-post", (request, response) => {
  return response.send('teste post')
})

app.listen(3060, () => console.log("server is running"))