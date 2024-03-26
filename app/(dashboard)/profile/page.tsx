import Container from "@/components/container/container";
import PageTitle from "@/components/pageTitle";
import ProfileInfo from "@/components/profile/profileInfo";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function ProfilePage() {
  return (
    <Container className="pb-10">
      <UserProfile />
    </Container>
  );
}
