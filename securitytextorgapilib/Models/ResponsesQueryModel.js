/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ResponsesQueryModel
 *
 * @constructor
 */
angular.module('SecuritytextOrgAPILib')
    .factory('ResponsesQueryModel', ['BaseModel', ResponsesQueryModelModel]);

    function ResponsesQueryModelModel(BaseModel) {
        var ResponsesQueryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.found = this.getValue(obj.found);
            this.status = this.getValue(obj.status);
            this.output = this.getValue(obj.output);
        };

        ResponsesQueryModel.prototype = new BaseModel();
        ResponsesQueryModel.prototype.constructor = ResponsesQueryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ResponsesQueryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'found', realName: 'found' },
                { name: 'status', realName: 'status' },
                { name: 'output', realName: 'output' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ResponsesQueryModel.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * Query matched exactly one Domain object
         *
         * @return {bool}
         */
        ResponsesQueryModel.prototype.getFound = function () {
            return this.found;
        };
    
        /**
         * Setter for Found
         * 
         * @param {bool} value 
         */
        ResponsesQueryModel.prototype.setFound = function (value) {
            this.found = value;
        };
    
        /**
         * Status of matched Domain object (if any)
         *
         * @return {int}
         */
        ResponsesQueryModel.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {int} value 
         */
        ResponsesQueryModel.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        /**
         * Text output of Query
         *
         * @return {string}
         */
        ResponsesQueryModel.prototype.getOutput = function () {
            return this.output;
        };
    
        /**
         * Setter for Output
         * 
         * @param {string} value 
         */
        ResponsesQueryModel.prototype.setOutput = function (value) {
            this.output = value;
        };
    
        return ResponsesQueryModel;
    }

}(angular));
