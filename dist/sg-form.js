!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.sgForm=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])(1)
});