const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.use(express.json());

app.post("/bfhl/", (req, res) => {
  const { numbers } = req.body;

  let odd = [];
  let is_success = true;
  let even = [];
  let user_id = "ayush_sahu_22122000";

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      if (numbers[i] % 2 === 0) even.push(numbers[i]);
      else odd.push(numbers[i]);
    } else {
      is_success = false;

      break;
    }
  }

  if (is_success) {
    res.send({
      is_success: is_success,
      user_id: "ayush_sahu_22122000",
      odd: odd,
      even: even,
    });
  } else
    res.send({
      is_success: is_success,
      user_id: "ayush_sahu_22122000",
    });
});
