angular.module('eventApp')
.controller('EditEventController',["$scope",function(scope){
    scope.saveEvent = function(event,newEventForm){
        if(newEventForm.$valid){

        }else{
            alert('invalid')
        }
    }
    scope.cancelEvent = function(){
        window.location = '/newEvent.html'
    }
}]);