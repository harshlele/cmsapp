export const auth = {
  login(body) {
    return this.authenticate("login", body);
  },
  change_password(body) {
    return this.authenticate("change_password", body);
  },
  signup(body) {
    return this.authenticate("signup", body)
  },
  logout() {
    return this.authenticate("logout", {});
  },
  authenticate(scope, body) {
    return fetch("/auth", {
      method: "POST",
      credentials: "include",
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({ ...body, scope }),
    })
      .then((r) => r.json());
  }
}
