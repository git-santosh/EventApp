// angular.module('eventApp')
// .controller('eventController',["$scope ,eventData" ,function(scope  ){
//     scope.siteName = "<span style='color:red;'>This is ng-bind-html</span> ";
//     scope.myStyle = {color:'red'};
//     scope.sortorder='name';
//     scope.event = eventData.event;
//     scope.upVoteSession = function(session){
//         session.upVoteCount++;
//     }
//      scope.downVoteSession = function(session){
//         session.upVoteCount-- ;
//     }
 
// }]);
angular.module('eventApp')
.controller('eventController',function($scope ,eventData  ){
    $scope.siteName = "<span style='color:red;'>This is ng-bind-html</span> ";
    $scope.myStyle = {color:'red'};
    $scope.sortorder='name';
    $scope.event = eventData.event;
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }
     $scope.downVoteSession = function(session){
        session.upVoteCount-- ;
    }
 
});