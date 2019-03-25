module.exports = function registerDependencies(d) {
    return (req, res, next) => {
        res.locals.dependencies = d;
        next();
    };
};
