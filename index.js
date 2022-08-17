var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}
var bestCustomer;
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
bestCustomer;

const leastFavoriteCustomer = 'tom';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'harry';
}
