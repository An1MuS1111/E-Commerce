function paginatedResults(model) {
    return (async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {};


        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit

            }
        }


        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }






        try {
            results.result = await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedResults = results
            console.log(results)
            next()
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }

    })
}

module.exports = { paginatedResults }