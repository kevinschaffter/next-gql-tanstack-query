type RequestInit = {
  headers:
    | (HeadersInit & {
        next?: NextFetchRequestConfig;
      })
    | { next?: NextFetchRequestConfig };
};

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit["headers"]
) {
  return async (): Promise<TData> => {
    const { next, ...restOptions } = options || {};
    const res = await fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...restOptions,
      },
      body: JSON.stringify({ query, variables }),
      next,
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
