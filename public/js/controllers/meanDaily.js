function MeanDailyController($scope, $http, Daily) {

  $scope.getDailyData = function() {
    $http.jsonp('http://isaacs.iriscouch.com/downloads/_design/app/_view/pkg?group_level=3&start_key=[%22mean-logger%22]&end_key=[%22mean-logger%22,{}]&callback=JSON_CALLBACK').success(function(data) {
        $scope.data = data;
        });
      };
      $scope.getDailyData();
 }