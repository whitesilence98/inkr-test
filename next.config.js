/** @type {import('next').NextConfig} */
module.exports = {
   eslint: {
      dirs: ["src"],
   },
   sass: true,
   modules: true,
   // Uncoment to add domain whitelist
   images: {
      domains: ["placewaifu.com", "placecorgi.com", "cdn.myanimelist.net"],
   },
};
