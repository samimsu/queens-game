import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/748",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "D", "D", "A"],
    ["B", "C", "C", "D", "D", "A"],
    ["B", "F", "F", "E", "D", "A"],
    ["B", "F", "E", "E", "E", "A"],
    ["B", "B", "B", "B", "B", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "Marnie",
  creatorLink: "https://www.instagram.com/marnie_917/",
};

export default level;
