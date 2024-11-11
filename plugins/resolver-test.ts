import { Resolver } from "@atlaspack/plugin";

export default new Resolver({
  resolve({ dependency }) {
    console.log("Resolving for dependency", dependency.specifier);
    return null;
  },
});
