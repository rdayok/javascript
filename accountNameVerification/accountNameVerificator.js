
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.paystack.co/bank")
xhr.setRequestHeader("Authorization", "Bearer sk_test_c3a2ffb297d8904e1128df208145908e6763ad0a");
xhr.send();
xhr.onload = function(){
    let  bankObjects  = JSON.parse(xhr.response).data;
    let selectTag = document.getElementById("bank");
    for(let index = 0; index < bankObjects.length; index++){
        const selectedBankObject = bankObjects[index];
        const createdOption = document.createElement("option")
        createdOption.setAttribute("value", selectedBankObject.code);
        createdOption.text = selectedBankObject.name;
        selectTag.appendChild(createdOption);
    }
}

accountNumber.addEventListener('keyup', function(event){
    if(event.keyCode == 13) submit();
})

function submit(){
    let selectedBankCode = document.getElementById("bank").value
    let accountNumber = document.getElementById("accountNumber").value
    accountDetails(accountNumber, selectedBankCode)
}


function accountDetails(userAccountNumber, bankCode){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.paystack.co/bank/resolve?account_number=${userAccountNumber}&bank_code=${bankCode}`)
    xhr.setRequestHeader("Authorization", "Bearer sk_test_c3a2ffb297d8904e1128df208145908e6763ad0a");
    xhr.send();
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.response).data)
            let  {account_name } = JSON.parse(xhr.response).data;
            alert(account_name)
        } else {
            console.log(xhr.status);
        }
    }
    
}
