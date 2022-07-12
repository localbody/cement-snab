const productCardAmountValueList = document.querySelectorAll(
    '.cs-product-card__amount-value'
)

const productCardAmountMinusList = document.querySelectorAll(
    '.cs-product-card__amount-minus'
)

const productCardAmountPlusList = document.querySelectorAll(
    '.cs-product-card__amount-plus'
)

productCardAmountValueList.forEach((item) => {
    item.addEventListener('change', (event) => {
        if (isNaN(parseInt(event.target.value))) event.target.value = 1
    })
})

productCardAmountMinusList.forEach((item) => {
    item.addEventListener('click', (event) => {
        const productCardAmountValue = event.target
            .closest('.cs-product-card__amount')
            .querySelector('.cs-product-card__amount-value')

        if (productCardAmountValue.value > 1)
            productCardAmountValue.value =
                parseInt(productCardAmountValue.value) - 1
    })
})

productCardAmountPlusList.forEach((item) => {
    item.addEventListener('click', (event) => {
        const productCardAmountValue = event.target
            .closest('.cs-product-card__amount')
            .querySelector('.cs-product-card__amount-value')

        productCardAmountValue.value =
            parseInt(productCardAmountValue.value) + 1
    })
})
