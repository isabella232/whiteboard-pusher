const Pusher = require("pusher");

const {
  APP_ID: appId,
  KEY: key,
  SECRET: secret,
  CLUSTER: cluster
} = process.env;

const pusher = new Pusher({
  appId,
  key,
  secret,
  cluster
});

module.exports = (req, res) => {
  const { x0, x1, y0, y1, color } = req.body;
  pusher.trigger("drawing-events", "drawing", { x0, x1, y0, y1, color });
  res.status(200).end("sent event succesfully");
};
