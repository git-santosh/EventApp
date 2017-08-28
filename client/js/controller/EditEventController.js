angular.module('eventApp')
.controller('EditEventController',function($scope,eventData,notification){
    $scope.saveEvent = function(event,newEventForm){
        if(newEventForm.$valid){
            eventData.saveEvent(event).then(function(data){
                console.log('data : '+data.data);
                if(data.success){
                    notification.success(data.data);
                }else{
                    notification.error(data.data)
                }
                
            })
        }else{
            alert('invalid')
        }
    }
    $scope.cancelEvent = function(){
        window.location = '/newEvent.html'
    }
});