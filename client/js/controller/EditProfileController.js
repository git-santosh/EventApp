eventApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder){
    $scope.user = {};
    $scope.getGravatarUrl = function(email){
        return gravatarUrlBuilder.buildGravtarUrl(email);
    }

});