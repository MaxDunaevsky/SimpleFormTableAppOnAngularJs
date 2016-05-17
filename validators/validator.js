formTableApp.directive('namesValidationDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
			function nameValidation(value) {
				if ((value.match(/\d/g) == null) && 
					(value.match(/\W/g) == null)) {
                    mCtrl.$setValidity('validName', true);
                } else {
                    mCtrl.$setValidity('validName', false);
                }
                return value;
            }
            mCtrl.$parsers.push(nameValidation);
        }
    };
});

formTableApp.directive('ageValidationDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function ageValidation(value) {
				if ((value >= 17) && (value <= 100)) {
                    mCtrl.$setValidity('validAge', true);
                } else {
                    mCtrl.$setValidity('validAge', false);
                }
                return value;
            }
            mCtrl.$parsers.push(ageValidation);
        }
    };
});

formTableApp.directive('phoneValidationDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function phoneValidation(value) {
				mCtrl.$setValidity('validPhone', true);
				for (var item of scope.people) {
					if (value == item.phone){
						mCtrl.$setValidity('validPhone', false);
					}
				}
                return value;
            }
            mCtrl.$parsers.push(phoneValidation);
        }
    };
});