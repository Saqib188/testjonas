const fs = require("fs");
const http = require("http");
const url = require("url");
/* 
const textin = fs.readFileSync("./text.txt", "utf-8");
console.log(textin);
const textadd = `text is here `;
fs.writeFileSync("text.txt", textadd);
console.log("file written s");
 */
/// kjk
const data = fs.readFileSync(
  `${__dirname}/dev-data/data.json`,
  "utf-8",
  (err, data) => {}
);
const productData = JSON.parse(data);
const server = http
  .createServer((req, res) => {
    // console.log(req.url);
    const pathName = req.url;
    if (pathName === "/" || pathName === "/overview") {
      res.end("This is overview");
    } else if (pathName === "/api") {
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(data);
    }
  })
  .listen(8008, "127.0.0.1", () => {
    console.log("Listening to requests on port 8008");
  });

/* const http = require("node:http");

const postData = JSON.stringify({
  msg: "Hello World!",
});

const options = {
  hostname: "www.google.com",
  port: 80,
  path: "/upload",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");
  res.on("data", (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data in response.");
  });
});

req.on("error", (e) => {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
 */
const a = 2;
