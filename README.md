# karma-ios-launcher
Run karma unit tests inside a UIWebView via a Cordova applications container.
<br><b>Note: This likely will not yet work with iOS 9.</b>

# installation
<pre>
npm install git+https://git.target.com/stores/karma-ios-launcher.git
</pre>
For this to work with Jenkins, you need to use git+ssh configuration with git as the user and a colon between hostname and org, like the following:
<pre>
"devDependencies": {
     "karma-ios-launcher": "git+ssh://git@git.target.com:stores/karma-ios-launcher.git"
 }
</pre>

# configuration
In your project's karma configuration file add `iOS` to the browsers array. To run on a specific device type, specify iosLauncher.deviceType.
## browsers
<pre>
browsers: ['iOS']
</pre>

## device types
<pre>
iosLauncher: {
    deviceType: 'iPhone-5'
}
</pre>
If you want to view available device types for your machine, use `ios-sim showdevicetypes` (assuming you have ios-sim globally installed).
