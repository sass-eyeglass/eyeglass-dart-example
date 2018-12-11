// uncommenting fibers makes it faster
// const Fiber = require("fibers");
const Eyeglass = require("eyeglass");
const sass = require("sass");
const fs = require("fs");

const options = {
  file: "./test.scss",
  outFile: "result.css",
  eyeglass: {
    root: __dirname,
    engines: { sass: sass }
  },
  // fiber: Fiber
};
const eyeglass = new Eyeglass(options);
const normalizedOptions = eyeglass.options;
sass.render(normalizedOptions, function(err, result) {
  if (err) {
    console.log("Error", err)
  } else {
    fs.writeFileSync(options.outFile, result.css);
    console.log("Success. Compiled", options.file ,"in ", result.stats.end - result.stats.start, "milliseconds");
  }
});