export async function fetchQ() {
  try {
    const response = await fetch(
      "https://ciphersprint.pulley.com/task_NDhkNDAwZTZiMzdkNGI1NDViNGE2YmY3NjYxNmI1Mjk=",
      {
        method: "encoded as base64",
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
