// This is just a function to test the backend API

import { cookies } from 'next/headers';
import { BACKEND_URL } from '../constants';

export default async function getUsers() {
  const jwtCookie = cookies().toString();

  const res = await fetch(`${BACKEND_URL}`, {
    headers: {
      Cookie: jwtCookie,
    },
  });

  return res.json();
}
