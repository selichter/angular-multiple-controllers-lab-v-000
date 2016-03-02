function ContactController() {
  var vm = this;
  this.name = "Sarah";
  this.email = "sarah@email.com";
  this.phone = "01234567890";

  this.changeName = function() {
    vm.name = 'Something else!';
  };
};

angular
  .module('app')
  .controller('ContactController', ContactController)
