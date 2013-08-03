var dom = require('dom')
  , htmlElement = require('sg-html-element')

var Form = function(_form){
	this.form = dom(htmlElement(_form));
}

Form.prototype.constructor = Form;

Form.prototype.validate = function() {
	
	var self = this
	  , invalidFieldWrapper = self.form.find('.form-field-required:not(.valid)')
	  , firstField

	if (invalidFieldWrapper.els.length == 0) return true;

	// If Angular is available, try to make the form dirty
	try {
		angular.element(self.form.els[0]).scope()[self.form.attr('name')].$setDirty();
	} catch(e){}

	// Shake invalid messages
	invalidFieldWrapper.forEach(function(_wrapper){

		var $wrapper = dom(_wrapper)
		  , $aside = $wrapper.find('aside')

		$aside = $aside.els.length > 0 ? $aside : $wrapper.append('<aside>');

		$aside.removeClass('shake');
		_wrapper.offsetWidth; // reflow
		$aside.addClass('animated').addClass('shake');

	});

	// Find the field and focus
	firstField = invalidFieldWrapper.first().find('input');
	if (firstField.els.length > 0) firstField.els[0].focus();

	return false;
	
}

Form.prototype.invalid = function() { return ! this.validate() }
Form.prototype.valid   = function() { return   this.validate() }

module.exports = function(_form){

	return new Form(_form);

}