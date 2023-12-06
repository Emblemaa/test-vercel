const path = require("path")

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "build.js"
    },
    target: "node"
}