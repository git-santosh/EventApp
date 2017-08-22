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
        imgUrl:'/images/angularjs-logo.png',
        sessions:[
            {
                name:'JavaScript ',
                creatorName :'Alen',
                duration:'1 hr',
                level:'Introductory',
                abstract:'This session will take closer look at JavaScript Object and inheritance'
            },
            {
                name:'Node ',
                creatorName :'Ryan Dahl',
                duration:'2 hr',
                level:'Advanced',
                abstract:'Learn Node.js from scratch and become zero to hero'
            },
            {
                name:'Angular ',
                creatorName :'Misko Hevery',
                duration:'30 min',
                level:'Intermediate',
                abstract:'Learn Angualr js introduction'
            },
            {
                name:'Ember',
                creatorName :'Yehuda Katz',
                duration:'30 min',
                level:'Advanced',
                abstract:'Learn Ember js fully setp by step'
            }
        ]
    }
}]);