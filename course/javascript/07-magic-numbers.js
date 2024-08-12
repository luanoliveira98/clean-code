// Wrong

// setTimout, setInterval
setTimeout(() => {}, 2592000000)

// Right

// setTimout, setInterval
const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30

setTimeout(() => {}, INTERVAL_30_DAYS)

// Wrong
function calculateDiscount(price, discountAmount) {
    // return discount
}

// Right
function calculateDiscount(priceInCents, discountAmountInPercentage) {
    // return discount
}