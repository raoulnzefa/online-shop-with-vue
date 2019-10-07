Create local gitrepo: online-shop-with-vue

Create github remote repository
https://github.com/fong06/online-shop-with-vue

Add dev branch
https://github.com/fong06/online-shop-with-vue/tree/dev

Install NodeJS manually
https://nodejs.org/
node-v10.16.3-x64.msi

--Open CMD
--Commandline
npm install -g vue-cli

#Conflict with versions?

https://github.com/vuejs/vue-cli

#use vue cli to create a new project and use webpack, which include vue-loadersetup, hot reload (automatic file change detection?) linting (autocheck syntax), testing, css extraction (less, sass etc. to css?)

<!-- Create a application with webpack tool-->
vue init webpack scotch-store


<!--
webpack: A full-featured webpack + vue-loader setup with hot reload, linting, testing & CSS extraction.

webpack-simple: A simple webpack + vue-loader setup for quick prototyping.

browserify: A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.

browserify-simple: A simple Browserify + vueify setup for quick prototyping.

simple: The simplest possible Vue setup in a single HTML file.
-->


D:\dev\scotch-store>npm install
<!-- npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"}) 

audited 12938 packages in 4.342s
found 10 vulnerabilities (6 moderate, 4 high)
  run `npm audit fix` to fix them, or `npm audit` for details

-->

D:\dev\scotch-store>npm audi fix
<!--
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1 package from 4 contributors and updated 1 package in 4.614s
fixed 6 of 10 vulnerabilities in 12938 scanned packages
  3 package updates for 4 vulns involved breaking changes
  (use `npm audit fix --force` to install breaking changes; or refer to `npm audit` for steps to fix these manually)
-->
D:\dev\scotch-store>npm audit fix
<!--
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

updated 1 package in 4.257s
fixed 6 of 10 vulnerabilities in 12938 scanned packages
  3 package updates for 4 vulns involved breaking changes
  (use `npm audit fix --force` to install breaking changes; or refer to `npm audit` for steps to fix these manually)
-->
D:\dev\scotch-store>npm audit fix --force
<!--
npm WARN using --force I sure hope you know what you are doing.

> fsevents@1.2.9 install D:\dev\scotch-store\node_modules\fsevents
> node install

npm WARN url-loader@2.1.0 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN css-loader@3.2.0 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.

+ url-loader@2.1.0
+ webpack-bundle-analyzer@3.5.2
+ css-loader@3.2.0
added 99 packages from 44 contributors, removed 255 packages and updated 16 packages in 7.963s
fixed 10 of 10 vulnerabilities in 12938 scanned packages
  3 package updates for 4 vulns involved breaking changes
  (installed due to `--force` option)
  -->
  
  Visual STudio code plugin voor VUE
  https://github.com/vuejs/vetur


<!-- Fix visual studio linting errors-->
https://alligator.io/vuejs/eslint-vue-vetur/

<!-- Modify settings.json for Visual studio code: -->
<!-- 
Windows %APPDATA%\Code\User\settings.json
macOS $HOME/Library/Application Support/Code/User/settings.json
Linux $HOME/.config/Code/User/settings.json
-->

  {
    "eslint.autoFixOnSave": true,
	"eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ]
}


--Install firebase
npm install firebase --save


--https://firebase.google.com/
-- 
