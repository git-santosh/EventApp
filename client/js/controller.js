angular.module('eventApp')
.controller('eventController',["$scope" ,function(scope){
    scope.siteName = "<span style='color:red;'>This is ng-bind-html</span> ";
    scope.myStyle = {color:'red'};
    scope.sortorder='name';
    scope.event ={
        name : 'Angular Boot camp',
        date: new Date(),
        time:new Date(),
        location:{
            address:'Ganeshkhind road, Aundh',
            city:'Pune',
            state:'Maharashtra'
        },
        imgUrl:'/img/angularjs-logo.png',
        sessions:[
            {
                name:'JavaScript ',
                creatorName :'Alen',
                duration:'1 hr',
                level:'introductory',
                abstract:'This session will take closer look at JavaScript Object and inheritance',
                upVoteCount:0
            },
            {
                name:'Node ',
                creatorName :'Ryan Dahl',
                duration:'2 hr',
                level:'advanced',
                abstract:'Learn Node.js intermediate course from scratch and become zero to hero',
                upVoteCount:0
            },
            {
                name:'Angular ',
                creatorName :'Misko Hevery',
                duration:'30 min',
                level:'intermediate',
                abstract:'Learn Angualr js introduction',
                upVoteCount:0
            },
            {
                name:'Ember',
                creatorName :'Yehuda Katz',
                duration:'30 min',
                level:'advanced',
                abstract:'Learn Ember js fully setp by step',
                upVoteCount:0
            }
        ]
    }
    scope.upVoteSession = function(session){
        session.upVoteCount++;
    }
     scope.downVoteSession = function(session){
        session.upVoteCount-- ;
    }
}]);