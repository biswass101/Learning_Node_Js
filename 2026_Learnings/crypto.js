const crypto = require('crypto');


// for (let i = 0; i < 100; i++) {
//     crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
//     crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
//     crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
// }


// console.log("Time taken:", Date.now() - start);

//increasing thread pool sizse

process.env.UV_THREADPOOL_SIZE = 32;


const MAX_CALLS = 32;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
        console.log(`HASH ${i + 1}: `, Date.now() - start);
    });
}