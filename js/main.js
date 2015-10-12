var app = angular.module('activitiesApp', []);
app.controller('jumbotronCtrl', function ($scope, $http) {
    $http.get('data/jumbotron.json').success(function(data) {
        $scope.jumbotron = data[0];
    });
});
app.controller('servicesCtrl', function ($scope, $http) {
    $scope.loading = true;
    $http.get('data/services.json').success(function(data) {
        $scope.services = data;
    });
    $scope.loaded = function() {
        $scope.loading = false;
    };
});
app.controller('developsCtrl', function ($scope, $http) {
    $scope.loading = true;
    $http.get('data/develops.json').success(function(data) {
        $scope.develops = data;
    });
    $scope.loaded = function() {
        $scope.loading = false;
    };
});
app.controller('supportsCtrl', function ($scope, $http) {
    $scope.loading = true;
    $http.get('data/supports.json').success(function(data) {
        $scope.supports = data;
    });
    $scope.loaded = function() {
        $scope.loading = false;
    };
});
app.controller('initiativesCtrl', function ($scope, $http) {
    $scope.loading = true;
    $http.get('data/initiatives.json').success(function(data) {
        $scope.initiatives = data;
    });
    $scope.loaded = function() {
        $scope.loading = false;
    };
});
app.directive('loadedComplete', function() {
    return function(scope) {
        if (scope.$last) {
            scope.$eval('loaded()');
        }
    };
});

jQuery(function ($) {
    $('#login-submit').click(function() {
        alert('Correo Electrónico o Contraseña Incorrectos');
    });
});