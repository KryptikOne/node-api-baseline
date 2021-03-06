module.exports = (app) => {
    const items = require('../controllers/item.controller.js')

    // Create a new Item
    app.post('/items', items.create)

    // Retrieve all Items
    app.get('/items', items.findAll)

    // Retrieve a single item with itemId
    app.get('/items/:itemId', items.findOne)

    // Update a Note with itemId
    app.put('/items/:itemId', items.update)

    // Delete a Note with itemId
    app.delete('/items/:itemId', items.delete)
}