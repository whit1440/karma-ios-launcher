# karma-ios-launcher
Run karma unit tests inside a UIWebView via a Cordova applications container.
<br><b>Note: This likely will not yet work with iOS 9.</b>

# installation
<pre>
npm install git+https://git.target.com/stores/karma-ios-launcher.git
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
