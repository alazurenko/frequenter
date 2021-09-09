import { StoreonStore } from "storeon";
import { createSubstore } from "storeon-substore";
import { State, Events } from ".";

const NAME = "auth";

export interface AuthModuleState {
  [NAME]: {
    isAuthenticated: boolean;
  };
}

const AUTH_DEFAULT_STATE = {
  isAuthenticated: false,
};

export const AuthSetAuthEvent = `auth/setAuthenitcated`;

export interface AuthModuleEvents {
  [AuthSetAuthEvent]: boolean;
}

export const authModule = (parentStore: StoreonStore<State, Events>) => {
  const store = createSubstore(parentStore, NAME);
  store.on("@init", () => AUTH_DEFAULT_STATE);
  store.on(AuthSetAuthEvent, (state, isAuthenticated) => {
    return {
      ...state,
      isAuthenticated,
    };
  });
};
