var INTEGER_REGEXP = /^\d+$/;
var phoneNumberRegex = /^[0-9]{5,12}$/;

merchantApp.directive('validationType', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      if (attrs.validationType == 'phonenumber'){
          ctrl.$validators.phonenumber = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }

          if (phoneNumberRegex.test(viewValue)) {
            // it is valid
            return true; 
          }
          // it is invalid
          return false;
        }        
      }
    }
  }
});