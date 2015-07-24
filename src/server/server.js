import Express from 'express';
import compression from 'compression';

const hotLoadPort  = process.env.HOT_LOAD_PORT || 3001;
const serverPort  = process.env.SERVER_PORT || 3000;
// create Express
const app = new Express();
// apply compression
app.use(compression());
//set favicon.ico
app.use("/", (req, res) => {
  res.send(
    `
    <html lang="en-us">
    <head>
      <meta charSet="utf-8"/>
      <title>React Starter for Playground</title>
    </head>
    <body>
    <div id="content">
    </div>
    <script src="//localhost:${hotLoadPort}/build/app.js"></script>
    </body>
    </html>
    `
  );
});

app.listen(serverPort, (err) => {
    if(err) {console.log("Express server start error: " + err);}
    else {
      console.info('==> ✅  Server is listening');
      console.info('==> 🌎  %s running on port %s, webpack-dev-server on port %s',
      "Express server", serverPort, hotLoadPort);
    }

});
