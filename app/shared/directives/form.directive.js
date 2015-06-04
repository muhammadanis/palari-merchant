var integerRegex = /^\d+$/;
var phoneNumberRegex = /^[0-9]{5,12}$/;
var decimalRegex = /^(?:\d*\.)?\d+$/;

phinisiApp.directive('validationType', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      if (attrs.validationType == 'phonenumber'){
        ctrl.$validators.phone_number = function(modelValue, viewValue) {
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
      else if (attrs.validationType == 'integer'){
        ctrl.$validators.integer = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }

          if (integerRegex.test(viewValue)) {
            // it is valid
            return true; 
          }
          // it is invalid
          return false;
        }        
      }
      else if (attrs.validationType == 'decimal'){
        ctrl.$validators.decimal = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }

          if (integerRegex.test(viewValue)) {
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