import {
  altoMain,
  celadon,
  coldPurple,
  emerald,
  halfBaked,
  macNCheese,
  nomad,
  turquoiseBlue,
  white,
} from "../colors";

const level = {
  path: "/community-level/739",
  size: 9,
  colorRegions: [
    ["E", "E", "G", "G", "G", "E", "C", "C", "C"],
    ["A", "A", "G", "H", "F", "E", "F", "H", "C"],
    ["C", "C", "G", "C", "F", "C", "F", "C", "C"],
    ["C", "H", "G", "H", "F", "H", "F", "E", "E"],
    ["C", "D", "D", "D", "F", "D", "F", "D", "D"],
    ["I", "B", "G", "H", "F", "H", "F", "H", "D"],
    ["G", "D", "D", "D", "F", "D", "F", "D", "D"],
    ["G", "H", "G", "I", "F", "H", "F", "E", "E"],
    ["G", "G", "G", "B", "F", "F", "F", "E", "E"],
  ],
  regionColors: {
    A: altoMain,
    B: nomad,
    C: emerald,
    D: turquoiseBlue,
    E: coldPurple,
    F: celadon,
    G: halfBaked,
    H: white,
    I: macNCheese,
  },
  solutionsCount: 1,
  createdBy: "VictorBandoiu",
  creatorLink: "https://www.instagram.com/victorban72/",
};

export default level;
