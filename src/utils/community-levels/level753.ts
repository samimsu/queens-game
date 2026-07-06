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
  path: "/community-level/753",
  size: 11,
  colorRegions: [
    ["F", "G", "G", "J", "J", "D", "E", "C", "J", "J", "H"],
    ["J", "F", "F", "K", "K", "D", "K", "C", "J", "K", "J"],
    ["J", "F", "E", "K", "K", "D", "K", "C", "J", "K", "J"],
    ["D", "D", "D", "D", "D", "D", "D", "C", "D", "D", "D"],
    ["J", "I", "I", "I", "I", "D", "H", "C", "K", "J", "J"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["J", "B", "B", "I", "I", "D", "I", "C", "K", "K", "J"],
    ["J", "A", "B", "B", "I", "D", "I", "C", "K", "K", "J"],
    ["A", "A", "A", "B", "B", "D", "I", "C", "F", "F", "G"],
    ["I", "G", "A", "A", "F", "D", "I", "C", "F", "F", "G"],
    ["H", "I", "A", "J", "J", "D", "J", "C", "J", "J", "F"],
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
  createdBy: "detectorsoho",
  creatorLink: "https://github.com/tscotn",
};

export default level;
