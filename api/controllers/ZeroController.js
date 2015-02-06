/**
 * ZeroController
 *
 * @description :: Server-side logic for managing zeros
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	server:function (req, res) {
		return res.send(sails.config.routes);
	},

	database:function (req, res) {
		return res.send(sails.config.models);
	}
};
