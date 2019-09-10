import data from "./data.js";
import { PREV_EPISODE, NEXT_EPISODE, SET_ACTIVE_INDEX, SET_OVERLAY_ACTIVE } from "./actions.js";
import reducer from "./reducer.jsx";
import RENDER from "./renderUtils.jsx";
import { EpisodesContext, EpisodesProvider } from "./context.jsx";

console.log(reducer);

export { data, RENDER, reducer, PREV_EPISODE, NEXT_EPISODE, SET_ACTIVE_INDEX, SET_OVERLAY_ACTIVE, EpisodesContext, EpisodesProvider };
export { default } from "./Episodes.jsx";
