module.exports = (app) => {
    const courseRoutes = require('./course.routes');
    app.use('/api', courseRoutes);

}
