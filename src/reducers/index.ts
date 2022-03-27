type event = {
  id: number;
  title: string;
  body: string;
};
export type State = event[];
type CreateCase = Omit<event, "id"> & { type: "CREATE_EVENT" };
type DeleteCase = { id: number; type: "DELETE_EVENT" };
type DeleteAllCase = { type: "DELETE_ALL_EVENT" };
type Action = CreateCase | DeleteCase | DeleteAllCase;

const events = (state: State = [], action: Action) => {
  const { type } = action;
  switch (type) {
    case "CREATE_EVENT": // 新規作成の場合
      const { title, body } = action;
      const event = { title, body };

      // stateがなければ新規作成のeventは1つ目なのでid:1
      if (!state.length) {
        return [{ ...event, id: 1 }];
      }

      // stateが既に存在する場合は、idを振り、既存のstateにマージした配列を返す
      const incrementId = Math.max(...state.map((event) => event.id)) + 1;
      return [...state, { ...event, id: incrementId }];

    case "DELETE_EVENT": // 単一削除
      if (!state.length) return [];

      const { id } = action;
      return state.filter((event) => event.id !== id);

    case "DELETE_ALL_EVENT": // 全て削除
      return [];

    default:
      return state;
  }
};

export default events;
