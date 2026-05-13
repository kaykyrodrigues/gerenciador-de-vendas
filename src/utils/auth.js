export function getUser() {
  const user = localStorage.getItem("user");

  try {
    return user ? JSON.parse(user) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
}