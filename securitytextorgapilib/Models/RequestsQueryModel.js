/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of RequestsQueryModel
 *
 * @constructor
 */
angular.module('SecuritytextOrgAPILib')
    .factory('RequestsQueryModel', ['BaseModel', RequestsQueryModelModel]);

    function RequestsQueryModelModel(BaseModel) {
        var RequestsQueryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.domain = this.getValue(obj.domain);
        };

        RequestsQueryModel.prototype = new BaseModel();
        RequestsQueryModel.prototype.constructor = RequestsQueryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        RequestsQueryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'domain', realName: 'domain' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        RequestsQueryModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * Name of Domain to query
         *
         * @return {string}
         */
        RequestsQueryModel.prototype.getDomain = function () {
            return this.domain;
        };
    
        /**
         * Setter for Domain
         * 
         * @param {string} value 
         */
        RequestsQueryModel.prototype.setDomain = function (value) {
            this.domain = value;
        };
    
        return RequestsQueryModel;
    }

}(angular));
