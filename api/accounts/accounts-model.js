
const db = require('../../data/db-config');

const getAll = () => {
  // return db.select().table('account')
  // DO YOUR MAGIC
  return db('accounts')
}

const getById = id => {
  return db('accounts').where('id', id).first()
  // DO YOUR MAGIC
}

const create = async account => {
  const [id] =await db('accounts').insert(account, ['id','name', 'budget'])
  return getById(id)
  // DO YOUR MAGIC
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
  // DO YOUR MAGIC
}

const deleteById = async id => {
  const toBeChopped = await getById(id)
  await db('accounts').where({ id }).del()
  return toBeChopped;
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
