document.getElementById('btnProduct').onclick = function() {
     calcCost();
};

function calcCost() {
    let selProd = document.getElementById('selectProduct').value;
    let quanProd = document.getElementById('quantityProduct').value;
    let total = selProd*quanProd;
    document.getElementById('priceProduct').innerHTML = total;
    document.getElementById('infoProdukt').style.display = 'block';
    
    if (selProd == 0 || quanProd == 0) {
         document.getElementById('infoProdukt').style.display = 'none';
         alert('Укажите значение');
         return;
        }
};

