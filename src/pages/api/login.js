// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const registeredUsers = [{ email: "foo", password: "bar" }];

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("api called with request body:", req.body);
    const user = registeredUsers.find((user) => user.email === req.body.email);
    if (user && user.password === req.body.password) {
      console.log("login Success");
      res
        .status(200)
        .json({ status: [200], loginStatus: "success", loggedIn: true });
    }
    console.log("login failed");
    res.status(400).json({ loginStatus: "failed", loggedIn: false });
  }
  console.log(`method:${req.method} not allowed`);
  res.status(400).json({ loginStatus: "failed", loggedIn: false });
}
