import { ProjectConfigModel } from "./src/ProjectConfigModel";

let projectConfig = {
  projectType: "node",
  compile: {
    outDir: "./es/",
    module: "commonjs",
    target: "es5",
    lib: ["es2015", "es2015.promise", "es2015.symbol"],
    declaration: true
  },
  command: false,
  documents: false,
  unitTest: false,
  sourceInclude: ["./src/**/*"]
};

export default projectConfig;
