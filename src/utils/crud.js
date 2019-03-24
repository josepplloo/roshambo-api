export const getOne = model => async (req, res) => {}

export const getMany = model => async (req, res) => {
  const docs = await model.find()
  res.status(200).json({ data: docs })
}

export const createOne = model => async (req, res) => {
  const doc = await model.create({ ...req.body })
  res.status(201).json({ data: doc })
}

export const updateOne = model => async (req, res) => {}

export const removeOne = model => async (req, res) => {}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
