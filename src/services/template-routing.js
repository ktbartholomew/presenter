var fs = require('fs');
var path = require('path');
var url = require('url');
var config = require('../config');
var RequestHelper = require('../helpers/request');
var PathService = require('../services/path');

var ROUTES_FILE = config.control_routes_file();

var TemplateRoutingService = {
    _readRoutes: function (site) {
        var routes =
            JSON.parse(fs.readFileSync(
                path.resolve(PathService.getConfigPath(), ROUTES_FILE),
                'utf-8'
            ))[site];

        return routes.routes;
    },
    getRoute: function (urlPath) {
        urlPath = urlPath || RequestHelper.request.path;
        var routes = this._readRoutes(RequestHelper.host);

        var bestMatch = null;

        for(var pattern in routes) {
            var patternExpression = new RegExp(pattern);
            if(patternExpression.test(urlPath)) {
                bestMatch = routes[pattern];
            }
        }

        return bestMatch || 'index.html';
    }
};

module.exports = TemplateRoutingService;
