const express = require("express");
const axios = require("axios");
const app = express();

app.listen("3000", () => {
  console.log("listening");
});

app.get("/contacts", (req, res) => {
  axios
    .get("https://geekfactory4855.freshdesk.com/api/v2/contacts", {
      headers: {
        Authorization: "Basic V2ZZQjRtZGhhOFQxa2JaSVZlU3I6eA==",
        Cookie: "_x_m=x_c; _x_w=6_2",
      },
    })
    .then((resp) => {
        let newRes = resp.data.map((data)=>{
            return {"email":data.email}
        })
      res.json(newRes);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/tickets", (req, res) => {
  axios
    .get("https://geekfactory4855.freshdesk.com/api/v2/tickets", {
      headers: {
        Authorization: "Basic V2ZZQjRtZGhhOFQxa2JaSVZlU3I6eA==",
        Cookie: "_x_m=x_c; _x_w=6_2",
      },
    })
    .then((resp) => {
        let newRes = resp.data.map((data)=>{
            return {"subject":data.subject,"id":data.id}
        })
      res.json(newRes);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
