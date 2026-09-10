import { API_URL } from "./api";


export async function signup(data: {
  name: string;
  email: string;
  phone: string;
  password: string;
}) {

  const response = await fetch(
    `${API_URL}/auth/signup`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.detail || "Signup failed"
    );
  }

  return result;
}


export async function login(data: {
  email: string;
  password: string;
}) {

  const response = await fetch(
    `${API_URL}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.detail || "Login failed"
    );
  }

  return result;
}