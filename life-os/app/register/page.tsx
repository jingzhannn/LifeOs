"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Registration failed");
      return;
    }

    // auto-login after register
    await signIn("credentials", { email, password, callbackUrl: "/" });
  }

  return (
    <main className="p-6 max-w-sm">
      <h1 className="text-xl font-semibold">Register</h1>
      <form className="mt-4 space-y-3" onSubmit={onSubmit}>
        <input className="border p-2 w-full" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Password (min 8 chars)" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="border px-4 py-2">Create account</button>
      </form>
    </main>
  );
}
