import app from "./express";
import config from "./config";

app.listen(config.port, err => {
  if (err) console.log(err);
  else console.log("Server is listening on port ", config.port);
});
