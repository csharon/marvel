angular.module('xd.services.toastr', [])
  .value('toastr', toastr)

  .factory('xdToastr', function (toastr) {
    toastr.options.closeButton = true;
    return {
      success: function (msg, title) {
        toastr.success(msg, title);
      },
      error: function (msg, title) {
        toastr.error(msg, title);
      },
      warn: function (msg, title) {
        toastr.warning(msg, title);
      }
    };
  });