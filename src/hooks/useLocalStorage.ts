const useLocalStorage = <T extends Record<string, unknown>>(
  stateName: string
) => {
  const setState = (key: keyof T, value: T[keyof T]) => {
    const currentState: T = JSON.parse(localStorage.getItem(stateName) ?? "{}");
    currentState[key] = value;
    const json = JSON.stringify(currentState);
    localStorage.setItem(stateName, json);
  };

  const deleteState = (key: keyof T) => {
    const currentState: T = JSON.parse(localStorage.getItem(stateName) ?? "{}");
    const newState = { ...currentState, [key]: void 0 };
    const json = JSON.stringify(newState);
    localStorage.setItem(stateName, json);
  };

  const allDelete = () => localStorage.clear;

  return {
    setState,
    deleteState,
    allDelete,
  };
};

export default useLocalStorage;
