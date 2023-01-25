const productList = document.querySelector("#productList");
const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productRemoveBtn = document.getElementById("productRemove");

const products = ["melk", "saft", "egg", "frokostblanding"];

// Legge til funksjoner til buttons
productSubmitBtn.addEventListener("click", addProduct);
productRemoveBtn.addEventListener("click", removeProduct);

// Funksjon for å legge til et produkt på slutten i liste
function addProduct() {
  products.push(productInput.value);

  productList.innerHTML = "";
  productInput.value = "";

  for (let i = 0; i < products.length; i++) {
    productList.innerHTML += `<li>${products[i]}</li>`;
  }
}

for (let i = 0; i < products.length; i++) {
  productList.innerHTML += `<li>${products[i]}</li>`;
}

// Funksjon for å fjerne siste element fra liste
function removeProduct() {
  products.pop(productInput.value);

  productList.innerHTML = "";
  productInput.value = "";

  for (let i = 0; i < products.length; i++) {
    productList.innerHTML += `<li>${products[i]}</li>`;
  }
}
