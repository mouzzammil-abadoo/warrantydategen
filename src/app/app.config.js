(function () {
    angular
        .module('warrantyuptodate')
        .config(config);

    function config($stateProvider, $mdDateLocaleProvider) {

        $mdDateLocaleProvider.formatDate = function (date) {
            var d = date.getDate();
            var m = date.getMonth() + 1; //Month from 0 to 11
            var y = date.getFullYear();
            return '' + (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
        };

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'tpl/warrantyuptodate.tpl.html',
                controller: 'warrantyuptodateController',
                controllerAs: 'vm'
            });

    }
})();