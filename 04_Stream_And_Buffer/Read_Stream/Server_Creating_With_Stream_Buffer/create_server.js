const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.write(`

                <html>
                    <head>
                        <title>Form</title>
                    </head>
                    <body>
                        <form method = "post" action = "/process">
                            <input type = "text" name = "message"/>
                        </form>
                    </body>
                </html>

            `);
        res.end();
    } else if (req.url === '/process' && req.method === "POST")
    {
        //***streaming approach-->
        // req.on('data', (chunk) => {
        //     //getting posted data(full encoded in Binary) in from in stream manner
        //     // console.log(chunk); 
        //     //actual posted(half encoded with +) data
        //     console.log(chunk.toString()); 
        // })  
        // res.write('Thanks For Submitting');
        // res.end();

        //***if we want full data-->
        const body = []
        req.on('data', (chunk) => {
           body.push(chunk) 
        }) 
        req.on('end', () => {
            //this message will notify after the full data came
            console.log('Stream Finished'); 
            //getting actual data-->
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody);

        })  
        res.write('Thanks For Submitting');
        res.end();

    } else {
        res.write('Not Found!!');
        res.end();
    }
});

server.listen(3000);
console.log("listening on port 3000");