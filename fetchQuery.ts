import {
  QueryClient,
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  CountriesQueryVariables,
  CountriesQuery,
  CountriesDocument,
} from "./generates";
import { useCountriesQuery } from "./generates";

type RequestInit = {
  headers:
    | (HeadersInit & {
        next?: NextFetchRequestConfig;
      })
    | { next?: NextFetchRequestConfig };
};

// type UseCountriesQuery<TData = CountriesQuery, TError = unknown> = {
//   (
//     variables?: CountriesQueryVariables,
//     options?: Omit<
//       UseQueryOptions<CountriesQuery, TError, TData>,
//       "queryKey"
//     > & {
//       queryKey?: UseQueryOptions<CountriesQuery, TError, TData>["queryKey"];
//     }
//   ): UseQueryResult<TData, TError>;
//   getKey: (variables?: CountriesQueryVariables) => QueryKey;
//   fetcher: (
//     variables?: CountriesQueryVariables,
//     options?: RequestInit["headers"]
//   ) => () => Promise<TData>;
// };

// type UseQuery = typeof useQuery;
// type UseQuery<TData = unknown, TError = unknown, TQueryFnData = TData> = {
//   (
//     variables?: any,
//     options?: Omit<UseQueryOptions<TData, TError, TQueryFnData>, "queryKey"> & {
//       queryKey?: UseQueryOptions<TData, TError, TQueryFnData>["queryKey"];
//     }
//   ): UseQueryResult<TData, TError>;
//   getKey: (variables?: unknown) => QueryKey;
//   fetcher: (
//     variables?: unknown,
//     options?: RequestInit["headers"]
//   ) => () => Promise<TData>;
// };

// type DecoratedQueryHook = UseQuery

// type QueryHook<TData = CountriesQuery, TError = unknown> = {
//   (
//     variables?: CountriesQueryVariables,
//     options?: Omit<
//       UseQueryOptions<CountriesQuery, TError, TData>,
//       "queryKey"
//     > & {
//       queryKey?: UseQueryOptions<CountriesQuery, TError, TData>["queryKey"];
//     }
//   ): UseQueryResult<TData, TError>;
//   getKey: (variables?: CountriesQueryVariables) => QueryKey;
//   fetcher: (
//     variables?: CountriesQueryVariables,
//     options?: RequestInit["headers"]
//   ) => () => Promise<TData>;
// };

// export const fetchQuery = async <
//   TQuery extends typeof useQuery & {
//     fetcher: (
//       variables?: Parameters<TQuery>[0],
//       options?: RequestInit["headers"]
//     ) => () => UseQueryResult<TQuery>;
//   }
// >(query) => {
//   const queryClient = new QueryClient();
//   const data = await queryClient.fetchQuery({
//     queryKey: ["aoeu"],
//     queryFn: query.fetcher(variables, { next }),
//   });
//   return data;
// };

// export const fetchQuery = async <
//   TQuery extends { query: () => UseQueryResult<unknown> }
// >({
//   query,
//   variables,
//   next,
// }: {
//   query: TQuery["query"];
//   variables?: CountriesQueryVariables;
//   next?: NextFetchRequestConfig;
// }) => {
//   const queryClient = new QueryClient();

//   const data = await queryClient.fetchQuery({
//     queryKey: query.getKey(variables),
//     queryFn: query.fetcher(variables, { next }),
//   });

//   return data;
// };

// const thing = fetchQuery({ query: useCountriesQuery });

// console.log(thing.then((res) => console.log(res.data)));

// const thing = useCountriesQuery();

type UseQuery<TData = unknown, TVariables = {}, TQueryFnData = TData> = {
  (
    variables?: TVariables,
    options?: Omit<
      UseQueryOptions<TData, unknown, TQueryFnData>,
      "queryKey"
    > & {
      queryKey?: UseQueryOptions<TData, unknown, TQueryFnData>["queryKey"];
    }
  ): UseQueryResult<TData, unknown>;
  getKey: (variables?: TVariables) => QueryKey;
  fetcher: (
    variables?: TVariables,
    options?: RequestInit["headers"]
  ) => () => Promise<TData>;
};

const queryClient = new QueryClient();

// const fetchData = async <TData>(query: UseQuery<TData>) => {
//     const data = await queryClient.fetchQuery({
//         queryKey: query.getKey(),
//         queryFn: query.fetcher(undefined, { next: { revalidate: 0 } }),
//     });
//     return data;
// };

const fetchData = async <TData, TVariables>({
  query,
}: {
  query: UseQuery<TData, TVariables>;
}) => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: query.getKey(),
    queryFn: query.fetcher(undefined, { next: { revalidate: 0 } }),
  });
  return data;
};

const data = fetchData<CountriesQuery, CountriesQueryVariables>({
  query: useCountriesQuery,
});
