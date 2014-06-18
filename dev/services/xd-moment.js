angular.module('xd.services.moment', [])
  .value('xdMoment', moment)
  .filter('moment', function (xdMoment) {
    return function (aDate, formatString) {

      var dateFormat = formatString || 'MM/DD/YYYY'
      if (angular.isDate(aDate)) {
        return xdMoment(aDate).format(dateFormat);
      } else if (angular.isString(aDate)) {
        return xdMoment(aDate).isValid() ? xdMoment(aDate).format(dateFormat) : '';
      }

      return '';
    }
  });