module.exports = {

    showDatabaseErrorResponse: (message, error) => {
            var resData = { "success": false, "status_code": 200, "error_code": 5005, "error_description": "Database error!", "message": message, "data": {}, "error": error };
            return resData;
    },

    showUnathorizedErrorResponse: (message) => {
        var resData = { "success": false, "status_code": 200, "error_code": 5004, "error_description": "Invalid Login Credential!", "message": message, "data": {}, "error": {} };
        return resData;
    },

    showDatabaseErrorResponse: (message, error) => {
        var resData = { "success": false, "status_code": 200, "error_code": 5005, "error_description": "Database error!", "message": message, "data": {}, "error": error };
        return resData;
    },

    showSuccessResponse: (message, data) => {
        var resData = { "success": true, "status_code": 200, "message": message, "data": data };
        return resData;
    },
    showFailedResponse: (message, data) => {
        var resData = { "success": false, "status_code": 200,"error_code": 5002, "message": message, "data": data };
        return resData;
    },
    showSuccessResponseCount: (message, data, count) => {
        var resData = { "success": true, "status_code": 200, "message": message, "data": data, "totalcount":count };
        return resData;  
    },
    showValidationErrorResponse: (message) => {
        var resData = { success: false, "status_code": 200, "error_code": 5002, "error_description": "Validation Error!", "message": message, "data": {}, "error": {} };
        return resData;
    },

    showInternalServerErrorResponse: (message) => {
        var resData = { success: false, "status_code": 200, "error_code": 5003, "error_description": "Internal Coding error or Params Undefined!", "message": message, "data": {}, "error": {} };
        return resData;
    },
}