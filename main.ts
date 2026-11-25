import { mkdirSync, writeFileSync } from "node:fs";

// One sentence about the best meal I ever had: a mango, straight off the tree,
// handed to me by my father when I was seven. The sentence is built from its
// three beats — the moment, the sensory detail, the closing turn — so it reads
// aloud as one clean sentence and lands on the image that stays.
const moment =
  "I was seven when my father handed me a mango straight off the tree,";
const sensation = "juice running down to my elbows,";
const landing = "and nothing since has tasted that yellow.";

const line = [moment, sensation, landing].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
