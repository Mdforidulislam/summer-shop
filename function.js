// Call the function for each product number
let totalAmount = 0;

function buyProductEveryCard(productNumberId, priceElementId, productInfo, setArea, productTotalA, purchaseBtn1,couponBtn,coponValue,discountArea,ramainingBlc,goHome) {
    const productNumberButton = document.getElementById(productNumberId);
    if (productNumberButton) {
        productNumberButton.addEventListener('click', function () {
            const getAmountInfo = document.getElementById(priceElementId);
            const getProductInfo = document.getElementById(productInfo).innerText;
            const purchaseBtn = document.getElementById(purchaseBtn1);
            const couponBtnEvn = document.getElementById(couponBtn);
            if (getAmountInfo && getProductInfo && purchaseBtn && couponBtnEvn) {
                const convertAmount = parseFloat(getAmountInfo.innerText);
                totalAmount += convertAmount;
                const setTofixtTotal = totalAmount.toFixed(2);
                setValueProductInfo(setArea, getProductInfo);
                setValue(productTotalA, setTofixtTotal);

                // Enable purchase button
                if (totalAmount > 0) {
                    purchaseBtn.removeAttribute('disabled');
                }
                if (totalAmount >= 200) {
                    couponBtnEvn.removeAttribute('disabled');
                }
            } else {
                console.error(`One or more elements not found.`);
            }
        });
    }
    // for purchash btn 
    const getPurchaseBtn = document.getElementById(goHome);
    getPurchaseBtn.addEventListener('click',function () {
        document.getElementById(discountArea).innerText = '';
        document.getElementById(productTotalA).innerText = '';
        document.getElementById(ramainingBlc).innerText = '';
        document.getElementById(setArea).innerText = '';


       const getDisableBtn =  document.getElementById(purchaseBtn1);
       const setDisableCoupn = document.getElementById(couponBtn);
       getDisableBtn.setAttribute('disabled', 'true');
       setDisableCoupn.setAttribute('disabled', 'true');
    })

    // for coupon btn 
    const couponBtnAdEven = document.getElementById(couponBtn);
    couponBtnAdEven.addEventListener('click',function () {
        const getInfoCopun = document.getElementById(coponValue).value;

        if (getInfoCopun === 'SELL200') {
            const getTotalBalence = document.getElementById(productTotalA).innerText;
            const convertBalence = parseFloat(getTotalBalence);
            const getDiscount = ((convertBalence / 100 ) * 20).toFixed(2);
            const remainBalance = (convertBalence - getDiscount).toFixed(2);
            document.getElementById(coponValue).value = '';
            setValue(discountArea,getDiscount)
            setValue(ramainingBlc,remainBalance)

            console.log('click')
        }
    })



}

let serialNumber = 0;

function setValueProductInfo(areaID, valueSet) {
    const getAReaId = document.getElementById(areaID);
    const creaLI = document.createElement('li');
    creaLI.style.listStyle = 'none';
    serialNumber++;
    creaLI.textContent = serialNumber + '. ' + valueSet;

    getAReaId.appendChild(creaLI);
}


function setValue(areaID, valueSet) {
    document.getElementById(areaID).innerText = valueSet;
}
