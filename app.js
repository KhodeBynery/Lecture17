(function () {
'use strict';

var shoppingList1 = [
  // This is an array
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter",
  "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var shoppingList2 = [
  //The elements of shoppingList2 are objects
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  // Because these $scope properties are here, they can be referenced in the html template
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

// This allows the "addToList" button to function
  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };
//The "push" value
    $scope.shoppingList2.push(newItem);
  };
}

})();
