/**
 * Created by edoli on 11-6-2016.
 */
var express = require("express");
var router = express.Router();
var HighScoreService = require("./../services/highScoreService");

router.get("/highscores", function(req, res)
{
    var method = null;
    switch(req.query.timespan)
    {

        case "today":
            method = HighScoreService.getHighScoresForToday;
            break;
        case "week":
            method = HighScoreService.getHighScoresForWeek;
            break;
        case "month":
            method = HighScoreService.getHighScoresForMonth;
            break;
        case "all":
            method = HighScoreService.getAllHighScores;
            break;
    }

    method(parseInt(req.query.skip), parseInt(req.query.take), function(highscores)
    {
        res.json(highscores);
    });
});

/*router.get("/highscores/week/:skip/:take", function(req, res)
{
    HighScoreService.getHighScoresForWeek(parseInt(req.params.skip), parseInt(req.params.take), function(highscores)
    {
        res.json(highscores);
    });
});
router.get("/highscores/month/:skip/:take", function(req, res)
{
    HighScoreService.getHighScoresForMonth(parseInt(req.params.skip), parseInt(req.params.take), function(highscores)
    {
        res.json(highscores);
    });
});

router.get("/highscores/all/:skip/:take", function(req, res)
{
    HighScoreService.getAllHighScores(parseInt(req.params.skip), parseInt(req.params.take), function(highscores)
    {
        res.json(highscores);
    });
});*/
module.exports = exports = router;