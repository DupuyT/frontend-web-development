require("esbuild")
    .build({
        entryPoints: ['js/main.js'],
        outfile: "bundle.js",
        bundle: true,
        watch: true,
        sourcemap: true
    })
    .then(() => console.log("watching..."))
    .catch(() => process.exit(1));
