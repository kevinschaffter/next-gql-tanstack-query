import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetcher } from "./fetcher.ts";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type RequestInit = {
  headers:
    | (HeadersInit & {
        next?: NextFetchRequestConfig;
      })
    | { next?: NextFetchRequestConfig };
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Continent = {
  __typename?: "Continent";
  code: Scalars["ID"]["output"];
  countries: Array<Country>;
  name: Scalars["String"]["output"];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: "Country";
  awsRegion: Scalars["String"]["output"];
  capital?: Maybe<Scalars["String"]["output"]>;
  code: Scalars["ID"]["output"];
  continent: Continent;
  currencies: Array<Scalars["String"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
  emoji: Scalars["String"]["output"];
  emojiU: Scalars["String"]["output"];
  languages: Array<Language>;
  name: Scalars["String"]["output"];
  native: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  phones: Array<Scalars["String"]["output"]>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};

export type CountryNameArgs = {
  lang?: InputMaybe<Scalars["String"]["input"]>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: "Language";
  code: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  native: Scalars["String"]["output"];
  rtl: Scalars["Boolean"]["output"];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: "Query";
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};

export type QueryContinentArgs = {
  code: Scalars["ID"]["input"];
};

export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};

export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
  code: Scalars["ID"]["input"];
};

export type QueryLanguageArgs = {
  code: Scalars["ID"]["input"];
};

export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: "State";
  code?: Maybe<Scalars["String"]["output"]>;
  country: Country;
  name: Scalars["String"]["output"];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  regex?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subdivision = {
  __typename?: "Subdivision";
  code: Scalars["ID"]["output"];
  emoji?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
};

export type CountriesQueryVariables = Exact<{ [key: string]: never }>;

export type CountriesQuery = {
  __typename?: "Query";
  countries: Array<{ __typename?: "Country"; name: string }>;
};

export type CountriesCodeQueryVariables = Exact<{ [key: string]: never }>;

export type CountriesCodeQuery = {
  __typename?: "Query";
  countries: Array<{ __typename?: "Country"; code: string }>;
};

export const CountriesDocument = `
    query Countries {
  countries {
    name
  }
}
    `;

export const useCountriesQuery = <TData = CountriesQuery, TError = unknown>(
  variables?: CountriesQueryVariables,
  options?: Omit<UseQueryOptions<CountriesQuery, TError, TData>, "queryKey"> & {
    queryKey?: UseQueryOptions<CountriesQuery, TError, TData>["queryKey"];
  }
) => {
  return useQuery<CountriesQuery, TError, TData>({
    queryKey:
      variables === undefined ? ["Countries"] : ["Countries", variables],
    queryFn: fetcher<CountriesQuery, CountriesQueryVariables>(
      CountriesDocument,
      variables
    ),
    ...options,
  });
};

useCountriesQuery.getKey = (variables?: CountriesQueryVariables) =>
  variables === undefined ? ["Countries"] : ["Countries", variables];

useCountriesQuery.fetcher = (
  variables?: CountriesQueryVariables,
  options?: RequestInit["headers"]
) =>
  fetcher<CountriesQuery, CountriesQueryVariables>(
    CountriesDocument,
    variables,
    options
  );

export const CountriesCodeDocument = `
    query CountriesCode {
  countries {
    code
  }
}
    `;

export const useCountriesCodeQuery = <
  TData = CountriesCodeQuery,
  TError = unknown
>(
  variables?: CountriesCodeQueryVariables,
  options?: Omit<
    UseQueryOptions<CountriesCodeQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<CountriesCodeQuery, TError, TData>["queryKey"];
  }
) => {
  return useQuery<CountriesCodeQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ["CountriesCode"]
        : ["CountriesCode", variables],
    queryFn: fetcher<CountriesCodeQuery, CountriesCodeQueryVariables>(
      CountriesCodeDocument,
      variables
    ),
    ...options,
  });
};

useCountriesCodeQuery.getKey = (variables?: CountriesCodeQueryVariables) =>
  variables === undefined ? ["CountriesCode"] : ["CountriesCode", variables];

useCountriesCodeQuery.fetcher = (
  variables?: CountriesCodeQueryVariables,
  options?: RequestInit["headers"]
) =>
  fetcher<CountriesCodeQuery, CountriesCodeQueryVariables>(
    CountriesCodeDocument,
    variables,
    options
  );
