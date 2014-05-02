Package.describe({
  summary: "jsignature"
});

Package.on_use(function (api, where) {
  api.add_files([
    'client/lib/jSignature.min.noconflict.js',
    'client/signhere/jSignature.SignHere.js',
    'client/signhere/signhere.svg'
    ],
  'client');
});