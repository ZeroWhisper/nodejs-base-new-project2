module.exports = {
    log(err, req, res, next) {
        res.status(err.status || 500);

        return res.render('errors/index', {
            message: err.message,
            error: process.env.NODE_ENV === 'production' ? {} : err,
        });
    },
    generic(req, res) {
        res.render('errors/404');
    },
};
