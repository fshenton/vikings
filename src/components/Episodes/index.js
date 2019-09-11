import data from "./data.js";
import ACTIONS from "./actions.js";
import reducer from "./reducer.jsx";
import RENDER from "./renderUtils.jsx";
import { EpisodesContext, EpisodesProvider, TrailersContext, TrailersProvider } from "./context.jsx";

export { data, RENDER, reducer, ACTIONS, EpisodesContext, EpisodesProvider, TrailersContext, TrailersProvider };
export { default } from "./Episodes.jsx";
