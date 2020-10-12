/**
 * Home route controller
 * @module
 * @function
 *  
 * @param {object} _ - Unused request argument
 * @param {object} res - Outbound response object 
 * @returns {string} - Value of a view to be rendered
 */
module.exports = (_, res) => res.status(200).render("index");
