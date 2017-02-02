appControllers.controller('listCtrl', ['$scope', '$state', '$stateParams',
	function($scope, $state, $stateParams) {
        
        $scope.itemName = null;
        $scope.addItem = function() {
            if (!$scope.itemName) return;
            $scope.$ctrl.onAddItem({list: $scope.$ctrl.context, itemName: $scope.itemName});
        };
	}
]);