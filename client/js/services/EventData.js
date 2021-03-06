eventApp.factory('eventData', function($http){
    return {
        event : 
        {
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
                    duration:1,
                    level:'introductory',
                    abstract:'This session will take closer look at JavaScript Object and inheritance',
                    upVoteCount:0
                },
                {
                    name:'Node ',
                    creatorName :'Ryan Dahl',
                    duration:0,
                    level:'advanced',
                    abstract:'Learn Node.js intermediate course from scratch and become zero to hero',
                    upVoteCount:0
                },
                {
                    name:'Angular ',
                    creatorName :'Misko Hevery',
                    duration:2,
                    level:'intermediate',
                    abstract:'Learn Angualr js introduction',
                    upVoteCount:0
                },
                {
                    name:'Ember',
                    creatorName :'Yehuda Katz',
                    duration:1,
                    level:'advanced',
                    abstract:'Learn Ember js fully setp by step',
                    upVoteCount:0
                }
            ]
    },
    saveEvent :function(event){
       return  $http.post('/add',event).then(function(data){
            console.log(data);
                return data.data;
        });
    }
    };
});