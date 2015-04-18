define([
	"./common/runtime-key",
	"./common/validate/parameter-presence",
	"./common/validate/parameter-type/date",
	"./common/validate/parameter-type/string",
	"./core-runtime",
	"./date/format",
	"./date/parse",
	"./date/tokenizer",

	"./number-runtime"
], function( runtimeKey, validateParameterPresence, validateParameterTypeDate,
	validateParameterTypeString, Globalize, dateFormat, dateParse, dateTokenizer ) {

Globalize._dateFormat = dateFormat;
Globalize._dateParser = dateParse;
Globalize._dateTokenizer = dateTokenizer;
Globalize._validateParameterTypeDate = validateParameterTypeDate;

Globalize.dateFormatter =
Globalize.prototype.dateFormatter = function( options ) {
	options = options || { skeleton: "yMd" };
	return Globalize[ runtimeKey( "dateFormatter", this.locale, arguments ) ];
};

Globalize.dateParser =
Globalize.prototype.dateParser = function( options ) {
	options = options || { skeleton: "yMd" };
	return Globalize[ runtimeKey( "dateParser", this.locale, arguments ) ];
};

Globalize.formatDate =
Globalize.prototype.formatDate = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeDate( value, "value" );

	return this.dateFormatter( options )( value );
};

Globalize.parseDate =
Globalize.prototype.parseDate = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeString( value, "value" );

	return this.dateParser( options )( value );
};

return Globalize;

});
