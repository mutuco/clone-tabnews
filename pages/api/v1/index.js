function status(request, response) {
  response.status(200).json({ chave: "valor" });
}

function texto(request, response) {
  response.status(200).send("dedada no teu toba");
}
export default status;
