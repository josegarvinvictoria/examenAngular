angular.module("appProductes")
.service('ProductesSvc', function ($resource) {
    return $resource('/api/productes/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
});
