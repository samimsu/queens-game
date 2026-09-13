import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/770",
  size: 11,
  colorRegions: [
    ["J", "E", "E", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["J", "J", "E", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "J", "J", "D", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "I", "J", "J", "D", "K", "K", "K", "K", "K", "K"],
    ["K", "I", "I", "J", "J", "C", "C", "K", "K", "K", "K"],
    ["K", "K", "K", "H", "J", "J", "C", "K", "K", "K", "K"],
    ["K", "K", "K", "H", "H", "J", "J", "B", "B", "K", "K"],
    ["K", "K", "K", "K", "K", "G", "J", "J", "B", "K", "K"],
    ["K", "K", "K", "K", "K", "K", "G", "J", "J", "A", "A"],
    ["K", "K", "K", "K", "K", "K", "K", "F", "J", "J", "A"],
    ["K", "K", "K", "K", "K", "K", "K", "F", "F", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Mike",
  creatorLink: "https://github.com/MikeSchoenhals",
};

export default level;
