var TextAreaWithLimitCrtl = function($scope) {
$scope.message = 'hey yo';
$scope.remaining = function() {

return MAX_LEN - $scope.message.length;

};
}