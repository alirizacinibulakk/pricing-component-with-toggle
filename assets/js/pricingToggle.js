function toggleCheck() {
    if(toggleSwitch.checked){
        basicPrice.innerText = "19.99";
        proPrice.innerText = "24.99";
        masterPrice.innerText = "39.99";
    } else{
        basicPrice.innerText = "199.99";
        proPrice.innerText = "249.99";
        masterPrice.innerText = "399.99";
    }
}

toggleSwitch.addEventListener("change", toggleCheck);
