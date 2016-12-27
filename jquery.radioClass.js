/*! jquery.radioClass.js © heoyunjee, 2016 */
(function(global, $){
  'use strict';

  jQuery.fn.radioClass = function(class_name) {
    this.siblings('.'+class_name).removeClass(class_name);
    this.addClass(class_name);
    return this;
  };

})(this, this.jQuery);
