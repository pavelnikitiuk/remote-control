class BaseRepository {
  constructor(model) {
    this._model = model;
  }

  // Create
  add(entry) {
    const entryModel = new this._model(entry);
    return entryModel.save();
  }

  all() {
    return this._model.find({});
  }

  // Read
  find(query) {
    return this._model.find(query);
  }

  findOne(query) {
    return this._model.findOne();
  }

  findById(id) {
    return this._model.findById(id);
  }

  // Update
  upadte(query, document) {
    return this._model.upadte(query, document);
  }

  updateById(id, document) {
    return this._model.findByIdAndUpdate(id, document, { new: true });
  }

  // Delete
  remove(query) {
    return this._model.remove(query);
  }

  removeOne(query) {
    return this._model.findOneAndRemove(query);
  }

  removeById(id) {
    return this._model.findByIdAndRemove(id);
  }
}

module.exports = BaseRepository;
