var virtualStandup = require('../models/virtualStandup.server.model.js');

exports.create = function(req, res) {
	var entry = new virtualStandup({
		memberName: req.body.memberName,
		project: req.body.project,
		workYesterday: req.body.workYesterday,
		workToday: req.body.workToday,
		impediment: req.body.impediment
	});

	entry.save();

	res.redirect(301,'/');
};

exports.list = function(req, res) {
	var query = virtualStandup.find();
	query.sort({createdOn: 'desc'}).limit(12).exec(function(err, results){
		res.render("index", {notes:results});
	});
};

exports.filterMethod = function(req, res) {
	var query = virtualStandup.find();
	var filter = req.body.memberName;

	query.sort({createdOn:'desc'});

	if(filter.length > 0){
		query.where({memberName:filter});
	}
	query.exec(function(err, results){
		res.render("index", {notes:results});
	});
}

exports.getNote = function( req, res) {
	res.render('newnote');
};
