

var myangular = angular.module('examApp', ['ngRoute']);
myangular.controller('ExamController', ['StudentFactory','$scope',"$http", function (StudentFactory,$scope,$http) {
        var self = this;
        $scope.studentsInfo = StudentFactory.getstudent();
        //opgave 6 i stedet for http skiv httpen til 
        $http.get("http")
                .then(function (response) {
                    $scope.filename = response.data;
                });
    }]);
myangular.filter("avg", function () {
    return function (input, val) {
        var input = input || "";
        input = input / val.length;
        return input;
    };
});
myangular.directive("studentgrades", function () {
    return {
        template: "<table><th></th><th>Basic Programming</th><th>Advanced Programming</th><th>DataBase Intro</th><tr ng-repeat=\"x in studentsInfo.students\"><td>{{x.name}}</td><td>{{x.grades[0].grade}}</td><td>{{x.grades[1].grade}}</td><td>{{x.grades[2].grade}}</td><td>{{x.grades[0]+x.grades[1]+x.grades[2]|avg:x.grade}}</td></tr></table>"
    };
});
myangular.factory('StudentFactory', function () {
    var studentsInfo = {};
        studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        studentsInfo.students = [];
        studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: 10}, {grade: 12}, {}]});
        studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: 7}, {grade: 10}, {}]});
        studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: 7}, {grade: 7}, {}]});
        studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: 10}, {}, {grade: 7}]});
    var getstudent = function () {
        return studentsInfo;
    };
    var deleteCar = function (id) {
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                cars.splice(i, 1);
                return;
            }
        }
    };
    var getcar = function(){
        return nextcar;
    };
    return {
        getstudent:getstudent,
        getcar:getcar,
        deleteCar: deleteCar
    };
});