/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of AttributesUuidModel
 *
 * @constructor
 */
angular.module('SecuritytextOrgAPILib')
    .factory('AttributesUuidModel', ['BaseModel', AttributesUuidModelModel]);

    function AttributesUuidModelModel(BaseModel) {
        var AttributesUuidModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.value = this.getValue(obj.value);
        };

        AttributesUuidModel.prototype = new BaseModel();
        AttributesUuidModel.prototype.constructor = AttributesUuidModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        AttributesUuidModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'value', realName: 'value' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        AttributesUuidModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * Value of UUID
         *
         * @return {string}
         */
        AttributesUuidModel.prototype.getValue = function () {
            return this.value;
        };
    
        /**
         * Setter for Value
         * 
         * @param {string} value 
         */
        AttributesUuidModel.prototype.setValue = function (value) {
            this.value = value;
        };
    
        return AttributesUuidModel;
    }

}(angular));
