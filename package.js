Package.describe({
  name: 'quietcreep:formation-file-input-blaze',
  summary: 'Blaze-based widget for file uploading using edgee:slingshot',
  version: '1.0.0_5',
  git: 'https://github.com/quietcreep/formation-file-input-blaze.git'
});

Package.onUse( function( api ){
  api.versionsFrom( '1.0.2.1' );
  var both = [ 'client', 'server' ];

  api.use( 'templating', 'client' );

  api.use( 'quietcreep:formation-file-input-core@1.0.0_5', both );
  api.imply( 'quietcreep:formation-file-input-core@1.0.0_5', both );

  api.use( 'edgee:slingshot@0.2.0', both );

  api.addFiles( 'fileInput/widget.html', 'client' );
  api.addFiles( 'fileInput/widget.js', 'client' );

});



Package.onTest( function( api ) {
  api.use( 'tinytest' );
});
