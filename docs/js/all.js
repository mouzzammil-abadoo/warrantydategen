!function(){"use strict";angular.module("warrantyuptodate",["ngMaterial","ngMessages","ngAnimate","ui.router"])}(),function(){function config($stateProvider,$mdDateLocaleProvider){$mdDateLocaleProvider.formatDate=function(date){var d=date.getDate(),m=date.getMonth()+1;return(d<=9?"0"+d:d)+"/"+(m<=9?"0"+m:m)+"/"+date.getFullYear()},$stateProvider.state("home",{url:"",templateUrl:"tpl/warrantyuptodate.tpl.html",controller:"warrantyuptodateController",controllerAs:"vm"})}config.$inject=["$stateProvider","$mdDateLocaleProvider"],angular.module("warrantyuptodate").config(config)}(),function(){"use strict";angular.module("warrantyuptodate")}(),function(){angular.module("warrantyuptodate").run(function(){})}(),function(){angular.module("warrantyuptodate").controller("warrantyuptodateController",function(){var vm=this;function change(){var date=new Date(vm.selectedDate);!function(date){var d=date.getDate(),m=date.getMonth()+1,y=date.getFullYear();vm.periodEnd=(d<=9?"0"+d:d)+"/"+(m<=9?"0"+m:m)+"/"+y}(date=new Date(date.setMonth(date.getMonth()+vm.durationPeriod)))}vm.selectedDate=new Date,vm.durationPeriod=6,vm.change=change,change()})}();