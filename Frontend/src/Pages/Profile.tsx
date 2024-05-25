import { useState, useEffect } from "react";

interface UserSession {
  username: string;
  password: string;
  // TODO: add more attributes
}

export default function Profile() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }
  }, []);

  return (
    <div>
      <p>profile</p>
      <p>{userSession?.username}</p>
      <p>{userSession?.password}</p>
    </div>
  );
}
