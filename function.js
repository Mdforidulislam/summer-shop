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
                setValue(setArea, getProductInfo);
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
        }
    })



}

// setValue for all info 

function setValue(areaID,valueSet) {
    const getAReaId = document.getElementById(areaID).innerText = valueSet;
}








// …or create a new repository on the command line
// echo "# b8a5-summer-sale-Mdforidulislam" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Programming-Hero-Web-Course4/b8a5-summer-sale-Mdforidulislam.git
// git push -u origin main