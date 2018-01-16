/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of AttributesTimestampsModel
 *
 * @constructor
 */
angular.module('SecuritytextOrgAPILib')
    .factory('AttributesTimestampsModel', ['BaseModel', AttributesTimestampsModelModel]);

    function AttributesTimestampsModelModel(BaseModel) {
        var AttributesTimestampsModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.createdAt = this.getValue(obj.createdAt);
            this.updatedAt = this.getValue(obj.updatedAt);
        };

        AttributesTimestampsModel.prototype = new BaseModel();
        AttributesTimestampsModel.prototype.constructor = AttributesTimestampsModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        AttributesTimestampsModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'createdAt', realName: 'created_at', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'updatedAt', realName: 'updated_at', isDateTime: true, dateTimeValue: 'rfc3339' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        AttributesTimestampsModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * Creation date
         *
         * @return {DateTime}
         */
        AttributesTimestampsModel.prototype.getCreatedAt = function () {
            return this.createdAt;
        };
    
        /**
         * Setter for CreatedAt
         * 
         * @param {DateTime} value 
         */
        AttributesTimestampsModel.prototype.setCreatedAt = function (value) {
            this.createdAt = value;
        };
    
        /**
         * Last updated
         *
         * @return {DateTime}
         */
        AttributesTimestampsModel.prototype.getUpdatedAt = function () {
            return this.updatedAt;
        };
    
        /**
         * Setter for UpdatedAt
         * 
         * @param {DateTime} value 
         */
        AttributesTimestampsModel.prototype.setUpdatedAt = function (value) {
            this.updatedAt = value;
        };
    
        return AttributesTimestampsModel;
    }

}(angular));
