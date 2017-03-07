$.ajax({
  method: "POST",
  url: "http://localhost:3000/pick-a-number",
  data: $('#guess-number-form').serialize(),
  success: handleSuccessfulGuess,
  error: handleErrorGuess
});

function handleSuccessfulGuess(userGuess) {
  console.log("");
  console.log("You guessed ", handleSuccessfulGuess.number);
  return "YEP";
}

function handleErrorGuess(jqXHR, status, error){
  console.log('error:', error);
  return "NOPE";
}
