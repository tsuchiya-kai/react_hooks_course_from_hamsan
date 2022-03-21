type event = {
  id: number;
  title: string;
  body: string;
};
type State = event[];
type Action = {
  type: string;
  title: string;
  body: string;
};

const events = (state: State = [], action: Action) => {
  const { type, title, body } = action;

  switch (type) {
    case "CREATE_EVENT": // 新規作成の場合
      const event = { title, body };

      // stateがなければ新規作成のeventは1つ目なのでid:1
      if (!state.length) {
        return [{ ...event, id: 1 }];
      }

      // stateが既に存在する場合は、idを振り、既存のstateにマージした配列を返す
      const id = Math.max(...state.map((event) => event.id)) + 1;
      return [...state, { ...event, id }];

    case "DELETE_EVENT": // 単一削除
      return state;

    case "DELETE_ALL_EVENT": // 全て削除
      return [];

    default:
      return state;
  }
};

export default events;
