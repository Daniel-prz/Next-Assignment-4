"use client";
import React from "react";
import UserProfile from "../components/UserProfile";
import Navigation from "../components/navigation";

export default function profile() {
  const UserData = {
    username: "User1",
    bio: "Aspiring Programmer, skills include Python and Machine Learning",
    hobbies: ["Going on walks in the local park", "Woodworking", "Gardening"],
  };
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div>
        <h1>Profile</h1>
        <Navigation />
      </div>
      <UserProfile userData={UserData} />
    </div>
  );
}
