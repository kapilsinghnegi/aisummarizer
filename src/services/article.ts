import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

if (!rapidApiKey || !baseUrl) {
  throw new Error("Missing RapidAPI environment variables");
}

interface SummaryResponse {
  summary: string;
}

interface GetSummaryParams {
  articleUrl: string;
  language: string;
}

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${baseUrl}/`,
    prepareHeaders: headers => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", baseUrl);
      return headers;
    },
  }),
  endpoints: builder => ({
    getSummary: builder.query<SummaryResponse, GetSummaryParams>({
      query: ({ articleUrl, language }) =>
        `summarize?url=${encodeURIComponent(articleUrl)}&length=3&lang=${language}`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
