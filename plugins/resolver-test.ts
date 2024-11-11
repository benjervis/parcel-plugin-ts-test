import { Resolver } from "@atlaspack/plugin";

interface DefinitelyNotValidJs {
  spec: string;
}

export default new Resolver({
  resolve({ dependency }) {
    const logItem: DefinitelyNotValidJs = { spec: dependency.specifier };
    console.log("Resolving for dependency", logItem);
    return null;
  },
});
