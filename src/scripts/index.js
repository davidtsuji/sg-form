var Form = function ( _form ) {
	this.form = $( _form );
	if ( !this.form.length ) throw new Error( 'An invalid form was given to sg-form' );
};

Form.prototype.validate = function () {
	var self = this,
		invalidFieldWrapper = self.form.find( '.required:not(.valid)' ),
		firstField;

	if ( invalidFieldWrapper.length === 0 ) return true;

	// If Angular is available, try to make the form dirty
	try {
		angular.element( self.form[ 0 ] ).scope()[ self.form.attr( 'name' ) ].$setDirty();
	} catch ( e ) {}

	// Shake invalid messages
	invalidFieldWrapper.each( function ( _i, _wrapper ) {
		var $wrapper = $( _wrapper ),
			$aside = $wrapper.find( 'aside.sg-form-badge' );

		if ( $aside.length === 0 ) {
			$aside = $( '<aside class="sg-form-badge">' );
			$wrapper.append( $aside );
		}

		$aside.removeClass( 'shake' );
		_wrapper.offsetWidth; // reflow
		$aside.addClass( 'animated' ).addClass( 'shake' );
	} );

	// Find the field and focus
	firstField = invalidFieldWrapper.find( 'input, select, textarea' );
	if ( firstField.length > 0 ) firstField[ 0 ].focus();

	return false;
};

Form.prototype.invalid = function () {
	return !this.validate();
};

Form.prototype.valid = function () {
	return this.validate();
};

module.exports = function ( _form ) {
	return new Form( _form );
};