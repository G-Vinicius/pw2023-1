// alert("Olá!");

document.getElementById("t1").innerHTML = "123456789";

setTimeout(
  () => (document.getElementById("t1").innerHTML = "Troquei o título..."),
  5000
);
