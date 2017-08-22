angular.module('eventApp')
.controller('eventController',["$scope" ,function(scope){
    scope.siteName = "Express";
    scope.event ={
        name : 'Angular Boot camp',
        date:'22/08/2017',
        time:'5:07 pm',
        location:{
            address:'Ganeshkhind road, Aundh',
            city:'Pune',
            state:'Maharashtra'
        },
        imgUrl:'/images/angularjs-logo.png'
    }
}]);