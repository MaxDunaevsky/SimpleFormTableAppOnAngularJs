var formTableApp = angular.module("formTableApp", []);
formTableApp.controller("personCtrl", function($scope) {
	$scope.people = [
						{ 'firstName':'Brendan',
							'lastName': 'Eich',
							'phone': '253-544-5876',
							'gender': 'Male',
							'age':'55'},
							{ 'firstName':'Douglas',
								'lastName': 'Crockford',
								'phone': '365-458-5478',
								'gender': 'Male',
								'age':'61'},
								{ 'firstName':'Stoyan',
									'lastName': 'Stefanov',
									'phone': '365-987-4562',
									'gender': 'Male',
									'age':'43'},
									{ 'firstName':'Alex',
										'lastName': 'MacCaw',
										'phone': '365-873-4987',
										'gender': 'Male',
										'age':'35'},
										{ 'firstName':'David',
											'lastName': 'Flanagan',
											'phone': '753-734-9730',
											'gender': 'Male',
											'age':'51'},
						];
	$scope.addRow = function(){
		// prevent error messages just after submission of a form therefore improving UX
		$scope.personForm.$setUntouched(); 
		
		// double check values we are going to write into our table
		if (($scope.firstName == undefined) ||
			($scope.lastName == undefined) ||
			($scope.phone == undefined) ||
			($scope.gender == undefined) ||
			($scope.age == undefined)){
			return;
		}
		
		// check for duplicate numbers
		for (var item of $scope.people) {
			if ($scope.phone == item.phone){
				return;
			}
		}
		
		if (($scope.firstName.match(/\d/g) != null) || 
			($scope.firstName.match(/\W/g) != null) ||
			($scope.lastName.match(/\d/g) != null) || 
			($scope.lastName.match(/\W/g) != null) ||
			($scope.phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) == null) ||
			(($scope.age < 18) || ($scope.age > 100))
			){
			return;
		}
				
		$scope.people.push({ 'firstName':$scope.firstName, 'lastName': $scope.lastName, 'phone':$scope.phone, 'gender': $scope.gender,'age': $scope.age});
		$scope.firstName='';
		$scope.lastName='';
		$scope.phone='';
		$scope.gender=''
		$scope.age='';
	};
	
	$scope.removeRow = function(phone){				
			// phone number here acts like id (First Name and LastName aren't specific enough)
			var index = -1;		
			var comArr = eval( $scope.people );
			for( var i = 0; i < comArr.length; i++ ) {
				if( comArr[i].phone === phone ) {
					index = i;
					break;
				}
			}
			if( index === -1 ) {
				alert( "Something gone wrong" );
			}
			$scope.people.splice( index, 1 );		
		};
});