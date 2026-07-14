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
  path: "/community-level/764",
  size: 11,
  colorRegions: [
    ["D", "D", "D", "A", "B", "C", "F", "K", "D", "D", "D"],
    ["D", "D", "D", "E", "H", "C", "F", "H", "D", "D", "D"],
    ["D", "D", "D", "C", "B", "C", "F", "C", "D", "D", "D"],
    ["A", "G", "A", "G", "A", "J", "G", "E", "F", "G", "G"],
    ["H", "B", "B", "J", "E", "B", "H", "B", "H", "B", "H"],
    ["C", "C", "A", "A", "E", "E", "J", "C", "C", "I", "I"],
    ["F", "K", "K", "A", "J", "J", "J", "F", "K", "K", "K"],
    ["E", "K", "K", "G", "H", "E", "F", "J", "K", "E", "E"],
    ["D", "D", "D", "G", "C", "I", "F", "K", "D", "D", "D"],
    ["D", "D", "D", "A", "H", "C", "J", "K", "D", "D", "D"],
    ["D", "D", "D", "A", "B", "I", "F", "K", "D", "D", "D"],
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
