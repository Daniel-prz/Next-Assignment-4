import React from "react";

export default function UserProfile({ userData }) {
  return (
    <div>
      <ul>
        <li>{userData.username}</li>
        <li>{userData.bio ? userData.bio : "no bio"}</li>
        <ul>
          {userData.hobbies
            ? userData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))
            : "no hobbies"}
        </ul>
      </ul>
    </div>
  );
}
