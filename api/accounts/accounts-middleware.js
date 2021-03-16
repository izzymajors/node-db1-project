exports.checkAccountPayload = (req, res, next) => {
  if (!req.body.name || req.body.name.trim()) {
    res.status(40).json({
      message: 'name and budget are required'
    })
  }
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = async (req, res, next) => {
  if (!req.params.id || req.body.name.trim()) {
    res.status(400).json({
      message: 'that name is taken'
    })
  }
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  try{
    const account = await Account.findById(req.params.id)
    if (account) {
      res.status(404).json({
        message: 'account not found',
      })
    } else {
      next()
    }

  }
  // DO YOUR MAGIC
}

