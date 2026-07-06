import {
  anakiwa,
  bittersweet,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  periwinkle,
  saharaSand,
  turquoiseBlue,
  white,
} from "../colors";

const level = {
  path: "/community-level/742",
  size: 11,
  colorRegions: [
    ["E", "E", "E", "J", "D", "D", "D", "C", "E", "E", "E"],
    ["E", "A", "E", "D", "D", "D", "D", "D", "E", "A", "E"],
    ["E", "E", "D", "D", "D", "D", "D", "D", "D", "E", "E"],
    ["J", "D", "E", "E", "D", "D", "D", "E", "E", "D", "C"],
    ["B", "D", "E", "G", "E", "D", "E", "G", "E", "B", "B"],
    ["B", "E", "G", "G", "G", "E", "G", "G", "G", "E", "B"],
    ["D", "E", "G", "E", "G", "G", "G", "E", "G", "E", "D"],
    ["E", "G", "I", "G", "G", "H", "G", "G", "I", "G", "E"],
    ["E", "G", "G", "G", "H", "F", "H", "G", "G", "G", "E"],
    ["K", "E", "E", "E", "G", "G", "G", "E", "E", "E", "H"],
    ["K", "K", "K", "D", "E", "E", "E", "D", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: white,
    E: periwinkle,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "VictorBandoiu",
  creatorLink: "https://www.instagram.com/victorban72/",
};

export default level;
