var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "william";
function upperCaseCustomerName() {
  customerName = "BOB";
  return customerName;
}
function setBestCustomer() {
  bestCustomer = "not bob";
}
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Marlie";
}
