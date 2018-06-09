module.exports = function assignLastUpdate() {
    this.update({}, { $set: { lastUpdate: new Date() } })

    next()
}
