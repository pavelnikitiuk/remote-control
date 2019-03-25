const RecordBase = require('./Base/RecordBase');

const Node = require('../models/Node');

class NodeRepository extends RecordBase {}

const node = new NodeRepository(Node);

module.exports = node;
