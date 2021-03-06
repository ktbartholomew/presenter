var fs = require('fs');
var path = require('path');
var url = require('url');
var config = require('../../config');
var logger = require('../../server/logging').logger;
var HttpErrorHelper = require('../../helpers/http-error');
var RequestHelper = require('../../helpers/request');
var PathService = require('../path');
var UrlService = require('../url');

var CONTENT_FILE = config.control_content_file();

var ContentRoutingService = {
    _readContent: function (site) {
        var contentConfig;

        try{
            contentConfig =
                JSON.parse(fs.readFileSync(
                    path.resolve(PathService.getConfigPath(), CONTENT_FILE),
                    'utf-8'
                ));
        }
        catch(e) {
            logger.error('Unable to read ' + path.resolve(PathService.getConfigPath(), CONTENT_FILE));
            HttpErrorHelper.emit(500);
            return {};
        }

        if(!contentConfig.hasOwnProperty(site) || !contentConfig[site].hasOwnProperty('content')) {
            logger.warn(CONTENT_FILE + ' has no content routes defined for this site.');
            return {};
        }

        return contentConfig[site].content;
    },
    _readProxies: function (site) {
        var contentConfig;

        try{
            contentConfig =
                JSON.parse(fs.readFileSync(
                    path.resolve(PathService.getConfigPath(), CONTENT_FILE),
                    'utf-8'
                ));
        }
        catch(e) {
            contentConfig = {};
        }

        if(!contentConfig.hasOwnProperty(site) || !contentConfig[site].hasOwnProperty('proxy')) {
            return {};
        }

        return contentConfig[site].proxy;
    },
    getContentId: function (urlPath) {
        urlPath = urlPath || RequestHelper.request.path;
        var content = this._readContent(RequestHelper.host);

        var contentStoreBase = null, afterPrefix = null;

        for(var prefix in content) {
            if(urlPath.indexOf(prefix) !== -1) {
                contentStoreBase = content[prefix];
                afterPrefix = urlPath.replace(prefix, '');
            }
        }

        if(contentStoreBase === null) {
            return null;
        }

        return url.resolve(contentStoreBase, afterPrefix).replace(/\/$/, '');
    },
    getContentPrefix: function (urlPath) {
        urlPath = urlPath || RequestHelper.request.path;
        var content = this._readContent(RequestHelper.host);

        var prefixMatch = null;

        for(var prefix in content) {
            if(urlPath.indexOf(prefix) !== -1) {
                prefixMatch = prefix;
            }
        }

        return prefixMatch;
    },
    getPresentedUrl: function (contentId) {
        var content = this._readContent(RequestHelper.host),
            urlBase = null,
            afterPrefix = null;

        // contentId = contentId.replace(/\/$/, '');

        for(var prefix in content) {
            if(contentId.indexOf(content[prefix].replace(/\/$/, '')) !== -1) {
                urlBase = prefix;
                afterPrefix = contentId.replace(content[prefix], '');
            }
        }

        return UrlService.getSiteUrl(url.resolve(urlBase, afterPrefix));
    },
    getProxies: function () {
        return this._readProxies(RequestHelper.host);
    }
};

module.exports = ContentRoutingService;
