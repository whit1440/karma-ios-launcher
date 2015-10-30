var fs = require('fs'),
    spawn = require('child_process').spawn,
    iossim = require('ios-sim');

function writeBrowserUrlToApp(url) {
    var file = fs.readFileSync(__dirname + "/res/ioslauncher.app/www/js/index.js", {encoding: 'utf-8'});
    file = file.replace(/http.*?\"/, url + '"');
    fs.writeFileSync(__dirname + "/res/ioslauncher.app/www/js/index.js", file, {encoding: 'utf-8'});
}

var iOSBrowser = function(baseBrowserDecorator, config, args) {
    baseBrowserDecorator(this);

    this._getOptions = function(url){
        var options = ['launch', __dirname + "/res/ioslauncher.app"];
        if(config && config.deviceType) {
            options.push('--devicetypeid');
            options.push(config.deviceType);
        }
        writeBrowserUrlToApp(url);

        return options;
    };

    this.on('kill', function(done) {
        var kill = spawn('killall', ['-m', 'Simulator']);
        kill.on('close', function(){
            done();
        });
        kill.on('error', function(err){
            console.log("Error killing Simulator", err);
            done();
        });
    });
};

iOSBrowser.prototype = {
    name: 'iOS',

    DEFAULT_CMD: {
        darwin: __dirname + "/node_modules/ios-sim/bin/ios-sim"
    },
    ENV_CMD: 'IOS_BIN'
};

iOSBrowser.$inject = ['baseBrowserDecorator', 'config.iosLauncher', 'args'];

// PUBLISH DI MODULE
module.exports = {
    'launcher:iOS': ['type', iOSBrowser]
};
