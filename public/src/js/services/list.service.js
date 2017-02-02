appServices.factory('listService', [
    function () {

        var serviceObj = {
            
            // -------
            getAllList: function (cb) {

                var promise = new Promise((fulfill, reject) => {
                    $.ajax({
                        url: '/api/lists',
                        method: 'GET',
                        success: fulfill,
                        error: reject
                    });
                });

                promise
                    .then((response) => cb(null, response))
                    .catch((xhr, textStatus, errorThrown) => cb(xhr.responseJSON));
            },

            // -------
            getList: function(params, cb) {
                var promise = new Promise((fulfill, reject) => {
                    $.ajax({
                        url: '/api/lists/' + params.listId,
                        method: 'GET',
                        success: fulfill,
                        error: reject
                    });
                });

                promise
                    .then((response) => cb(null, response))
                    .catch((xhr, textStatus, errorThrown) => cb(xhr.responseJSON));
            },

            // -------
            addItem: function(params, cb) {
                var promise = new Promise((fulfill, reject) => {
                    $.ajax({
                        url: '/api/lists/' + params.listId + '/items',
                        method: 'POST',
                        data: { name: params.itemName },
                        success: fulfill,
                        error: reject
                    });
                });

                promise
                    .then((response) => cb(null, response))
                    .catch((xhr, textStatus, errorThrown) => cb(xhr.responseJSON));
            },

            // -------
            createList: function (params, cb) {

                var promise = new Promise((fulfill, reject) => {
                    $.ajax({
                        url: '/api/lists',
                        method: 'POST',
                        data: params,
                        success: fulfill,
                        error: reject
                    });
                });

                promise
                    .then((response) => cb(null, response))
                    .catch((xhr, textStatus, errorThrown) => cb(xhr.responseJSON));
            }

        };

        return serviceObj;
    }
]);