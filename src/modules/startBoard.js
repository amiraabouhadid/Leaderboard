export const startBoard = async (creatGameURL) => {
  let gameId;
  await fetch(creatGameURL, {
    method: "POST",
    body: JSON.stringify({ name: "Amira's game" }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      gameId = json.result
        .split(" ")
        .filter((word) =>
          word.match(/^((.*[0-9]+)[a-zA-Z]+.*)|((.*[a-zA-Z]+)[0-9]+.*)$/)
        )
        .join("");
    });

  return gameId;
};
