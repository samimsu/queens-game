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
  path: "/community-level/765",
  size: 11,
  colorRegions: [
    ["G", "C", "G", "C", "K", "G", "F", "K", "G", "C", "G"],
    ["A", "J", "B", "J", "J", "D", "J", "J", "A", "J", "H"],
    ["G", "C", "G", "I", "K", "G", "F", "E", "G", "I", "G"],
    ["A", "J", "B", "J", "J", "I", "J", "J", "G", "J", "H"],
    ["D", "J", "J", "J", "J", "D", "J", "J", "D", "J", "D"],
    ["G", "C", "G", "I", "K", "G", "F", "H", "G", "I", "G"],
    ["B", "J", "B", "J", "J", "B", "J", "J", "B", "J", "B"],
    ["H", "J", "H", "J", "J", "D", "J", "J", "H", "J", "H"],
    ["G", "E", "G", "E", "K", "G", "F", "I", "G", "I", "G"],
    ["F", "J", "B", "J", "J", "D", "J", "J", "F", "J", "H"],
    ["G", "F", "G", "F", "H", "G", "F", "H", "G", "I", "G"],
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
