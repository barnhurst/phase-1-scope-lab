customerName = "bob"
bestCustomer = undefined
const leastFavoriteCustomer = "unknown"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob"
}
