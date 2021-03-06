import { configType } from "./types";

const config: configType = {
    sizeOptions: [
        {id: 0, label: "4x4", value: {width: 4, height: 4}},
        {id: 1, label: "4x5", value: {width: 4, height: 5}},
        {id: 2, label: "5x6", value: {width: 5, height: 6}},
        {id: 3, label: "6x6", value: {width: 6, height: 6}},
    ],
    speedOptions: [
        {id: 0, label: "Fast", value: 1000},
        {id: 1, label: "Normal", value: 2000},
        {id: 2, label: "Slow", value: 3000},
    ],
    content: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s"]
};

export default config;
