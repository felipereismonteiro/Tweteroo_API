import express from "express";
import cors from "cors"

let conta

const tweets = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
];

const app = express();

app.use(cors());
app.use(express.json())

app.post("/sign-up", (req, res) => {
  conta = req.body
  res.send("foi")
});

app.get("/tweets", (req, res) => {
  res.send(tweets);
});

app.post("/tweets", (req, res) => {

  const {tweet} = req.body
  const {username, avatar} = conta

  if(req.body.tweet.length === 0) {
    return res.sendStatus(400)
  }

  tweets.push({
    username,
    avatar,
    tweet,
  });
  res.send("OK");
});

app.listen(5000);
