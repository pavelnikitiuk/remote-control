class BaseModel {
    getModel(header) {
        return {
            messageType: String.fromCharCode(header.type),
            fromNode: header.from_nodeID,
        }
    }
}

module.exports = BaseModel;