var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//------------------
//----Movie Crud----
//------------------
router.get('/api/movies', function(req, res){
	var db = req.db;
	
	db.collection('moviecollection').find().toArray(function(err, movies){
		res.json(movies);
	});
});

//Single Movie
router.get('/api/movies/:movie_id', function(req, res){
	var db = req.db;
	var movie = req.params.movie_id;
	
	db.collection('moviecollection').findById(movie, 
		function(err, result){
			res.json(result);
		}
	);
});

router.post('/api/movies/new', function(req, res){
	var db = req.db;
	
	db.collection('moviecollection').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: "success" } : { msg: err}
		);
	});
});

router.put('/api/movies/edit/:movie_id', function(req, res){
	var db = req.db;
	var movieToUpdate = req.params.movie_id;
	var doc = { $set : req.body };
	
	db.collection('moviecollection').updateById(movieToUpdate, doc,
		function(err, result){
			res.send((result === 1) ? { msg : 'success'} : { msg : 'error'});
		});
});

router.delete('/api/movies/:movie_id', function(req, res){
	var db = req.db;
	
	var movieToDelete = req.params.movie_id;
	
	db.collection('moviecollection').removeById(movieToDelete, function(err, result){
		res.send(
			(result === 1) ? { msg: 'success'} : { msg: 'error: ' + err}
		);
	});
});

//------------------
//---Theater Crud---
//------------------
router.get('/api/theaters',function(req, res){
	var db = req.db;
	db.collection('theaterlist').find().toArray(function(err, theaters){
		res.json(theaters);
	});
});

//---Single Theater---
router.get('/api/theaters/:theater_id', function(req, res){
	var db = req.db;
	var theater = req.params.theater_id;
	
	db.collection('theaterlist').findById(theater, 
		function(err, result){
			res.json(result);
		});
});

router.post('/api/theaters/new', function(req, res){
	var db = req.db;
	
	db.collection('theaterlist').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: "success" } : { msg : err }
		);
	});
});

router.put('/api/theaters/edit/:theater_id', function(req, res){
	var db = req.db;
	var theaterToUpdate = req.params.theater_id;
	var doc = { $set : req.body };
	
	db.collection('theaterlist').updateById(theaterToUpdate, doc, 
		function(err, result){
			res.send((result === 1) ? {msg : 'success'} : { msg : 'error' });
		});
});

router.delete('/api/theaters/:theater_id', function(req, res){
	var db = req.db;
	var theaterToDelete = req.params.theater_id;
	
	db.collection('theaterlist').removeById(theaterToDelete, function(err, result){
		res.send(
			(result === 1) ? { msg : 'success' } : { msg: 'error' }
		);
	});
});

//Add A movie to Theater Showing
router.put('/api/theaters/newshowing', function(req, res){
	var theaterToUpdate = req.body.theater_id;
	var theater = db.collection.find(theaterToUpdate);
	
	var doc = theater.showing.push(req.body.movie);
	
	db.collection('theaterlist').updateById(theaterToUpdate, doc,
		function(err, result){
			res.send(
				(result === 1) ? { msg : 'success' } : { msg : 'error'}
			);	
		});
});

module.exports = router;
