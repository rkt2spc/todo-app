appControllers.controller('dashboardCtrl', ['$scope', '$state', 'listService',
    function ($scope, $state, listService) {

        // --------
        var refresh = function () {
            listService.getAllList((err, lists) => {
                if (err) return console.log(err);
                $scope.lists = lists;
                $scope.$apply();
            });
        };

        // -------
        $scope.lists = [];
        refresh();

        // -------
        $scope.addItem = function (list, itemName) {

            listService.addItem({ listId: list._id, itemName: itemName }, (err, result) => {
                if (err) return console.log(err);

                listService.getList({ listId: list._id }, (err, updatedList) => {
                    let index = $scope.lists.findIndex((li) => li._id === list._id);
                    $scope.lists[index] = updatedList;
                    $scope.$apply();
                });
            });
        };

        // -------
        $scope.listName = null;
        $scope.createList = function () {

            if (!$scope.listName) return;

            listService.createList({ name: $scope.listName }, (err, result) => {
                if (err) return console.log(err);
                refresh();
            });
        };
    }
]);