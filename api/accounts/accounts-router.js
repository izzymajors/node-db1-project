const express = require('express')


const router = require('express').Router()
const Account = require('./accounts-model')

function checkId(req,res,next) {
  next()
}

function checkPayload(req, res, next) {
  next()
}

router.get('/', async (req, res, next) => {
  try{
    const data = await Account.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.get('/:id',checkId, async (req, res, next) => {
  try{
    const data = await Account.getById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.post('/',checkPayload, async (req, res, next) => {
  try{
    const data = await Account.create(req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.put('/:id',checkPayload, checkId, async (req, res, next) => {
  try{
    const data = await Account.updateById(req.params.id, req.body)
  } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
});

router.delete('/:id',checkId, async  (req, res, next) => {
  try{
    const data = await Account.remove(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
