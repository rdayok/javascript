const xhr = new XMLHttpRequest;
const url = "https://api.paystack.co/bank";

xhr.open('GET', url);
xhr.setRequestHeader("Authorization", "Bearer sk_test_c3a2ffb297d8904e1128df208145908e6763ad0a");
xhr.send();
xhr.onload = function (){
  const bankObjects = JSON.parse(xhr.response).data;
  const selectElement = document.getElementById("bank")
  bankObjects.array.forEach(selectedBankObject => {
    const newOptionElement = document.createElement("option")
    newOptionElement.setAttribute('value', selectedBankObject.code)
    newOptionElement.text = selectedBankObject.name
    selectElement.appendChild(newOptionElement)
  });
}