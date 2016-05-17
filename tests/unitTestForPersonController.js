describe( "People", function(){
	var scopeMock;
	beforeEach(module('formTableApp'));	
	beforeEach(
			inject(
					function( $rootScope, $controller ){		
						scopeMock = $rootScope.$new();		
						$controller( 'personCtrl', {$scope: scopeMock} );
					}					
			)
	);
	
	// Tests the length of the default $scope.people model object
	it( "should create model \"people\" with 4 people", function() {		
		expect( scopeMock.people.length ).toBe( 4 );
	});
	
	// Test the addRow behavior on the $scope object. 
	it( "should add an entry to the model \"people\"", function() {		
		scopeMock.firstName = "John";
		scopeMock.lastName = "Smith";
		scopeMock.phone = "325-658-8977";
		scopeMock.gender = "Male";
		scopeMock.age = "77";
		scopeMock.addRow();
		expect( scopeMock.people.length ).toBe( 5 );
		expect( scopeMock.firstName ).toEqual( '' );
		expect( scopeMock.lastName ).toEqual( '' );
		expect( scopeMock.phone ).toEqual( '' );
		expect( scopeMock.gender ).toEqual( '' );
		expect( scopeMock.age ).toEqual( '' );
	});
	
	// Test the removeRow behavior of the $scope object
	it( "should remove an entry from the model \"people\"", function() {		
		var phone = "365-873-4987";		
		scopeMock.removeRow(phone);
		expect( scopeMock.people.length ).toBe( 3 );
	});		

});