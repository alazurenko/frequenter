import { StoreonStore } from "storeon";
import { createSubstore } from "storeon-substore";
import { State, Events } from ".";

const NAME = "auth";

export interface AuthModuleState {
  [NAME]: {
    isAuthenticated: boolean;
    isLoading: boolean,
  };
}

const AUTH_DEFAULT_STATE = {
  isAuthenticated: false,
  isLoading: false,
};

export const AuthSetAuthEvent = `auth/setAuthenitcated`;
export const AuthLoadEvent = `auth/load`;
export const AuthSetLoadingStartEvent = `auth/setLoadingStart`;
export const AuthSetLoadingEndEvent = `auth/setLoadingEnd`;

export interface AuthModuleEvents {
  [AuthSetAuthEvent]: boolean;
  [AuthLoadEvent],
  [AuthSetLoadingStartEvent],
  [AuthSetLoadingEndEvent],
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

  store.on(AuthLoadEvent, () => {
    store.dispatch(AuthSetLoadingStartEvent);
    setTimeout(() => {
      store.dispatch(AuthSetLoadingEndEvent);
    }, 2000);
  })

  store.on(AuthSetLoadingStartEvent, (store) => ({...store, isLoading: true}));
  store.on(AuthSetLoadingEndEvent, (store) => ({...store, isLoading: false}));
};
