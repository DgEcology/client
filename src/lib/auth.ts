"use server";

import { cookies } from "next/headers";

export async function auth(login: string, password: string): Promise<boolean> {
  const cookiesStore = cookies();
  if (login === "admin" && password === "admin") {
    cookiesStore.set("SESSION", "true", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
    });
    return true;
  } else {
    return false;
  }
}
