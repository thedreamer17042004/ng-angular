// hàm mặc định phải khai báo 
var app = angular.module('myApp', ['ngMaterial']);
app.controller('MyController', function($scope){
	$scope.a1 = "Cái này dùng ở đâu cũng được";
	// scope. a1 nghĩa là mình gửi cái a1 vào scope để nó chuyển từ controller sang html
	// a1 là giá trị vs function
	$scope.a3 = function(){
		// a3 là cái hành động hđ này thay đổi a1 thành tadda
		$scope.a1 = "tadda";
	}
})

// khai báo controller 2
// scope là cái phiên dịch cho controller hiểu thằng html
