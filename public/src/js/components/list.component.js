appComponents.component('list', {
	templateUrl:  'partials/list.html',
    controller: 'listCtrl',
    bindings: {
        context: '=',
        onAddItem: '&'
    }
});