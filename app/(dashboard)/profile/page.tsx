import Container from "@/components/container/container";
import PageTitle from "@/components/pageTitle";
import ProfileInfo from "@/components/profile/profileInfo";
import { UserProfile } from "@clerk/nextjs";
import React from "react";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

export default function ProfilePage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container className="pb-10">
        <UserProfile />
      </Container>
    </HydrationBoundary>
  );
}
