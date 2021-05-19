const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`AUTHORIZATION SERVICE RUNNING ON http://localhost:${PORT}`);
});
