

angular.module('ccDemoApp', [
  'credit-cards'
])
.filter('yesNo', function () {
  return function (boolean) {
    return boolean ? 'Yes' : 'No';
  }
})

angular.module('ccDemoApp', [
  require('angular-credit-cards')
]);

// otherwise, include the code first then the module name
angular.module('ccDemoApp', [
  'credit-cards'
]);
