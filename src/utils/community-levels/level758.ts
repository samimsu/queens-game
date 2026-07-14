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
  path: "/community-level/758",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "K", "K", "K", "C", "K", "D", "K", "K"],
    ["A", "E", "A", "B", "A", "I", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "H", "H", "C", "H", "D", "G", "G"],
    ["J", "A", "K", "B", "H", "I", "C", "D", "D", "D", "G"],
    ["D", "A", "D", "B", "D", "D", "C", "D", "E", "D", "D"],
    ["J", "A", "J", "B", "E", "E", "C", "D", "D", "D", "F"],
    ["J", "A", "J", "B", "E", "C", "C", "C", "D", "F", "F"],
    ["C", "A", "C", "B", "C", "C", "E", "C", "C", "C", "C"],
    ["J", "A", "B", "B", "B", "C", "C", "C", "D", "I", "I"],
    ["B", "A", "B", "E", "B", "B", "C", "K", "D", "I", "I"],
    ["J", "A", "B", "B", "B", "I", "C", "I", "D", "I", "I"],
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
