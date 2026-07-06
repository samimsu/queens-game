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
} from "../colors";

const level = {
  path: "/community-level/752",
  size: 10,
  colorRegions: [
    ["F", "F", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["F", "A", "F", "B", "B", "C", "C", "C", "G", "J"],
    ["F", "F", "E", "F", "F", "C", "I", "C", "I", "J"],
    ["J", "B", "F", "H", "F", "C", "C", "C", "D", "H"],
    ["J", "B", "F", "F", "F", "F", "F", "D", "H", "D"],
    ["J", "C", "C", "C", "F", "H", "F", "D", "D", "H"],
    ["J", "C", "I", "C", "F", "F", "F", "F", "F", "J"],
    ["J", "C", "C", "C", "D", "D", "F", "A", "F", "J"],
    ["J", "G", "I", "D", "E", "D", "F", "F", "F", "A"],
    ["J", "J", "J", "H", "D", "H", "J", "J", "A", "J"],
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
  },
  solutionsCount: 1,
  createdBy: "VictorBandoiu",
  creatorLink: "https://www.instagram.com/victorban72/",
};

export default level;
