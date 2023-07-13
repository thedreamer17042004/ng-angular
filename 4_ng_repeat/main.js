// hàm mặc định phải khai báo 
var app = angular.module('myApp', ['ngMaterial']);
app.controller('MyController', function($scope){

	$scope.nhieunguoi = [
		{
			ten: "viet",
			namsinh: "1986",
			facebook: "fb.com/nddviet",
			dienthoai: "0309948983"
		},
		{
			ten: "nam",
			namsinh: "1936",
			facebook: "fb.com/nddnam",
			dienthoai: "0389398933"
		},
		{
			ten: "han",
			namsinh: "1874",
			facebook: "fb.com/nddhan",
			dienthoai: "0938488433"
		}
	]
})