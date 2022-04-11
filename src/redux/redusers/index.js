import { combineReducers } from "redux";

import hotels from "./hotels";
import user from "./user";
import filters from "./filters";

const rootReducer = combineReducers({ hotels, user, filters });
export default rootReducer;
