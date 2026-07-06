import {
  anakiwa,
  emerald,
  halfBaked,
  lightGreen,
  lightWisteria,
  white,
} from "../colors";

const level = {
  path: "/community-level/750",
  size: 6,
  colorRegions: [
    ["A", "A", "F", "F", "F", "F"],
    ["E", "B", "B", "B", "F", "F"],
    ["E", "E", "C", "C", "C", "C"],
    ["E", "D", "D", "D", "D", "D"],
    ["E", "F", "B", "B", "B", "B"],
    ["E", "F", "F", "F", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: halfBaked,
    C: anakiwa,
    D: lightGreen,
    E: emerald,
    F: white,
  },
  solutionsCount: 1,
  createdBy: "Abhi",
  creatorLink: "",
};

export default level;
