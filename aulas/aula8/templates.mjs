import { readFile } from "fs/promises";

const url = new URL("templates/base.html", import.meta.url);
export const base = await readFile(url, { encoding: "utf-8" });

export const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pellentesque faucibus malesuada. Donec pretium
            ultricies consectetur. Donec pharetra quam vel magna semper, vel
            lacinia nunc faucibus. Sed ac magna vel mauris elementum
            consectetur. Duis sed eros odio. Ut vel imperdiet dolor. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae`;
// export const base = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>{{titulo}}</title>
//     {{links}}
// </head>
// <body>
//     {{body}}
//     {{scripts}}
// </body>
// </html>
// `
