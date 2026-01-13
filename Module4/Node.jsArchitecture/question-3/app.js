import os from "os";
import fs from "fs/promises";

console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

await fs.writeFile("./data.txt","Hello World");
console.log("File created Successfully")

await fs.writeFile("Readme.md", "## This is first line in Readme")

const content = await fs.readFile("./data.txt", "utf-8");
console.log("Contnt of data.txt")
console.log(content);

await fs.appendFile("./data.txt", "\nThis is second File");
console.log("Data append to data.txt");

await fs.unlink("Readme.md");
console.log("Readme.md deleted");

