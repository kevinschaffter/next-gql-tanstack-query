import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { useCountriesQuery } from "../../../generates";

const MyComponent = async () => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: useCountriesQuery.getKey(),
    queryFn: useCountriesQuery.fetcher(undefined, { next: { revalidate: 0 } }),
  });
  return (
    <div>
      {data.countries.map((here) => (
        <>here</>
      ))}
    </div>
  );
};

export default MyComponent;
