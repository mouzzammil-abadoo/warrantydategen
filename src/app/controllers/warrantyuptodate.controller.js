(function () {
    angular
        .module('warrantyuptodate')
        .controller('warrantyuptodateController', warrantyuptodateController);

    /* @ngInject */
    function warrantyuptodateController() {
        var vm = this;

        vm.selectedDate = new Date();
        vm.durationPeriod = 6;

        vm.change = change;
        change();

        function change() {
            var date = new Date(vm.selectedDate);
            date = new Date(date.setMonth(date.getMonth() + vm.durationPeriod));
            dateToDMY(date);
        }

        function dateToDMY(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1; //Month from 0 to 11
            var y = date.getFullYear();
            vm.periodEnd = '' + (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
        }

    }
})();