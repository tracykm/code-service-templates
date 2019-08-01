/**
 * Mention the <platform version> parameterized, that serves as a info on when this Code template was used
 */

 /** 
 * Just for reference here, shouldn't be part of the template
 * Description: A shortlived microservice which is expected to complete under fixed period of time.
 * 
 */

/**
 * @typedef {object} Req
 * @property {object} params
 * @property {object} context
 * @property {boolean} isLogging
 * @property {string} systemKey
 * @property {string} userEmail
*/
/**
 * @param {Req} req
 * @param {CbServer.Resp} resp (success and error, should mention their respective jsdocs that they are code exits)
*/
function ServiceName(req,resp){
    // These are parameters passed into the code service
    var params = req.params
    resp.success("Success");
}
