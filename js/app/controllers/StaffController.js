function ContactController() {
  var vm = this;
  this.name = "Bob";
  this.email = "bobh@email.com";
  this.phone = "12345678900";
};

angular
  .module('app')
  .controller('StaffController', StaffController)
