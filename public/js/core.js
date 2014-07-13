var abTodo = angular.module('abTodo', ['todoController', 'todoService', 'xeditable']);

abTodo.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});