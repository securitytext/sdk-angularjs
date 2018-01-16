/**
  * SecuritytextOrgAPILib
  *
  * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';
angular.module('SecuritytextOrgAPILib')
    .factory('ModelFactory', ['AttributesUuidModel',
        'RequestsQueryModel',
        'AttributesTimestampsModel',
        'ResponsesQueryModel',
        ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(AttributesUuidModel, RequestsQueryModel, AttributesTimestampsModel, ResponsesQueryModel) {

		var classMap = {
            AttributesUuidModel: AttributesUuidModel,
            RequestsQueryModel: RequestsQueryModel,
            AttributesTimestampsModel: AttributesTimestampsModel,
            ResponsesQueryModel: ResponsesQueryModel
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
