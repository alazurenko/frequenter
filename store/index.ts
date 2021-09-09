import { createStoreon } from "storeon";
import { storeonDevtools } from "storeon/devtools";

import { authModule, AuthModuleState, AuthModuleEvents } from "./auth.module";


// State structure
export type State = AuthModuleState;

export type Events = AuthModuleEvents;

export const store = createStoreon<State, Events>([
  authModule,
  process.env.NODE_ENV !== "production" &&
    storeonDevtools({
      name: "[Frequenter]",
    }),
]);
