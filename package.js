Package.describe({
  summary: "jsignature",
  // Version number.
  version: "0.0.7",
  // Optional.  Default is package directory name.
  name: "steeve:jsignature",
  // Optional github URL to your source repository.
  git: "https://github.com/stephentcannon/jsignature.git",
});

Package.onUse(function (api) {
  api.addFiles([
    'client/lib/jSignature.min.noconflict.js',
    'client/signhere/jSignature.SignHere.js',
    'client/signhere/signhere.svg'
    ],
  'client');
});