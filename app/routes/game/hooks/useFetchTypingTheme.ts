import type { MoraWithStatus } from "~/types/extends/manimani";

type TypingTheme = {
  id: number;
  text: string;
  ruby: string;
  moras: MoraWithStatus[];
};

const GET_TYPING_THEME_QUERY = `
  query getTypingTheme($id: Int, $level: Int!, $difficulty: Float!) {
    getTypingTheme(id: $id, level: $level, difficulty: $difficulty) {
      id
      text
      ruby
      moras
    }
  }
`;

const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
if (!VITE_API_ENDPOINT) throw new Error(`API_ENDPOINT is ${VITE_API_ENDPOINT}`);

export const useFetchTypingTheme = () => {
    const fetchTypingTheme = async (
        level: number,
        difficulty: number,
        id?: number
    ): Promise<TypingTheme> => {
        const res = await fetch(VITE_API_ENDPOINT, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            query: GET_TYPING_THEME_QUERY,
            variables: { id, level, difficulty }
            })
        });

        const json = await res.json();

        if (json.errors) {
            throw new Error(json.errors[0]?.message || "GraphQL error");
        }

        const theme = json.data.getTypingTheme;

        return {
            id: theme.id,
            text: theme.text,
            ruby: theme.ruby,
            moras: JSON.parse(theme.moras) as MoraWithStatus[],
        };
    };

    return { fetchTypingTheme }
}

