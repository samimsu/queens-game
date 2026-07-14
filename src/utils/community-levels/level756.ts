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
  path: "/community-level/756",
  size: 10,
  colorRegions: [
    ["F", "G", "G", "F", "G", "G", "G", "G", "G", "F"],
    ["G", "B", "F", "I", "F", "J", "J", "J", "F", "G"],
    ["G", "F", "F", "I", "I", "F", "J", "F", "E", "G"],
    ["F", "I", "I", "F", "I", "I", "F", "E", "E", "G"],
    ["G", "F", "I", "I", "B", "F", "D", "F", "E", "G"],
    ["G", "H", "F", "I", "F", "F", "C", "C", "F", "G"],
    ["G", "H", "H", "F", "D", "D", "F", "C", "C", "F"],
    ["G", "H", "F", "A", "F", "C", "C", "F", "F", "G"],
    ["G", "F", "A", "A", "A", "F", "C", "F", "B", "G"],
    ["F", "G", "G", "G", "G", "G", "F", "G", "G", "G"],
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
