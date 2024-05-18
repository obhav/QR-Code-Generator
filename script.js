let imgbox = document.getElementById("imgbox");
let qr = document.getElementById("qr");
let qrText = document.getElementById("qrText");

function generateqr() {
  if (qrText.value.length > 0) {
    qr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgbox.classList.add("show-img");
    qrText.value = "";
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
