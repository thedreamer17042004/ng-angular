// hàm mặc định phải khai báo 
var app = angular.module('myApp', ['ngMaterial']);
app.controller('MyController', function($scope){
	$scope.giatri = "Người nhện trở về"
	$scope.hienthi = true ;


	$scope.doigiatri = function(){
		$scope.hienthi = !$scope.hienthi ;
	}
})