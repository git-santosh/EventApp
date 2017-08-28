angular.module('eventApp')
.controller('EditEventController',function($scope,eventData,Flash){
    Flash.create('success', 'Hooray!', 0, {container: 'flash-fixed'});
    $scope.message="";
    $scope.saveEvent = function(event,newEventForm){
        if(newEventForm.$valid){
            eventData.saveEvent(event).then(function(data){
                console.log('data : '+data.data)
                $scope.message =data.data
            })
             
             console.log($scope.message);
        }else{
            alert('invalid')
        }
    }
    $scope.cancelEvent = function(){
        window.location = '/newEvent.html'
    }
});