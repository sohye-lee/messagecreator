import React from "react";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

export default function DashboardPage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div
        className="flex w-full data-[panel-group-direction=vertical]:flex-col h-full max-h-[800px] items-stretch"
        data-panel-group=""
        data-panel-group-direction="horizontal"
        data-panel-group-id=":r18:"
        data-panel-group-units="percentages"
      ></div>
    </HydrationBoundary>
  );
}
