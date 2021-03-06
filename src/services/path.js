var path = require('path');
var config = require('../config');
var RequestHelper = require('../helpers/request');

var CONFIG_PATH = 'config';

var PathService = {
    getControlRepoPath: function () {
        return path.resolve(config.control_repo_path());
    },
    getDefaultTemplatesPath: function () {
        return path.resolve('./static');
    },
    getTemplatesPath: function () {
        var templatePath = 'templates/' + RequestHelper.host;
        return path.resolve(this.getControlRepoPath(), templatePath);
    },
    getConfigPath: function (configPath) {
        configPath = configPath || '';
        return path.resolve(this.getControlRepoPath(), CONFIG_PATH, configPath);
    }
};

module.exports = PathService;
