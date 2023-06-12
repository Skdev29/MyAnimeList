//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app = angular.module("formvalid", ["ui.bootstrap", "ui.utils"]);
app.controller("validationCtrl", function ($scope) {
  $scope.data = [
    ["Attack on Titan Season 1", "Action, Adventure,", "0.0/5.0","Null","Planing to Watch","Series"],
    ["Naruto: Shippuuden", "Action, Adventure, Comedy", "4.0/5.0","500/500","Completed","Series"],
    ["Naruto", "Action, Adventure, Comedy", "4.5/5.0","220/220","Completed","Series"],
    ["Another", "Horror", "4.8/5.0","12/12","Completed","Series"],
    ["Bubble", "Scifi", "4.1/5.0","01/01","Completed","Movie"],
    ["Chainsaw Man", "Action, Fantasy", "4.0/5.0","12/12","Completed","Series"],
    ["Death Note", "Psychogical,Supernatural ", "4.0/5.0","37/37","Completed","Series"],
    ["Hello World", "Scifi,Romance", "4.1/5.0","01/01","Completed","Movie"],
    ["Jujutsu Kaisen", "Action, Fantasy", "4.7/5.0","24/24","Completed","Series"],	
    ["A Silent Voice", "Romance", "4.1/5.0","01/01","Completed","Movie"],
    ["A Whisker Away", "Romance", "5.0/5.0","01/01","Completed","Movie"],
    
      ];

  $scope.dataTableOpt = {
    //custom datatable options
    // or load data through ajax call also
    aLengthMenu: [
      [10, 25, 50, 75, -1],
      [10, 25, 50, 75, "All"]
    ]
  };
});