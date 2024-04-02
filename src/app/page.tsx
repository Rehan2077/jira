"use client";
import { Button } from "@/components/Button";
import { signIn, useSession } from "next-auth/react";

export default function Home() {

  const {data:session, status} = useSession();

  console.log(session, status);
  

  return (
    <main>
      <Button onClick={() => signIn()} label="Login" />
    </main>
  );
}
