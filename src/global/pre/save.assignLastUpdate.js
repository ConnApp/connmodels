module.exports = function assignLastUpdate(next) {
    this.lastUpdate = new Date()

    next()
}
