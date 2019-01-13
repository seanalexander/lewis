const path = require("path");
const Foxify = require('foxify');
 
Foxify.dotenv(path.join(__dirname, ".env"));

let app = new Foxify();

app.get('/', (req, res) => {
    res.json({hello: 'world'});
});
/*
// create an error
app.get('/error', (req, res) => {
    throw new Error('I Failed :(');
});
 
// create an http error
app.get('/404', (req, res) => {
    throw new HttpException('Not Found', 404);
});
*/
 
//app.start();
app.start(() =>
  console.log(`Foxify server running at http://${app.get("url")}:${app.get("port")} (worker: ${process.pid})`));

console.log(app.prettyPrint());