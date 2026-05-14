const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // const demoData = {
    //     name: "Niloy Doe",
    //     age: 30,
    //     city: "New York"
    // }

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(JSON.stringify(demoData));


    const data = fs.readFileSync("index.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})
