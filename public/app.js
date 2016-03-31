(function() {
    angular.module('app', ['ui.bootstrap'])
        .controller('it', function($http, $scope, $uibModal) {
            $http.get('/interview')
                .then(function(data) {
                    $scope.interview = data.data;
                });
            $scope.showQuestions = function(interview) {
                $uibModal.open({
                    templateUrl: '/questions.html',
                    controller: function($scope) {
                        $scope.questions = interview.questions;
                    }
                });
            };
        });
})();
