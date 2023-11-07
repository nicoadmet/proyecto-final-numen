const listController = (req, res) => {
    console.log(req.query)
    res.json({
      prod1: req.query.prod1,
      prod2: req.query.prod2,
      prod3: req.query.prod3,
      prod4: req.query.prod4,
      prod5: req.query.prod5
    })
  }

  module.exports = { listController }


