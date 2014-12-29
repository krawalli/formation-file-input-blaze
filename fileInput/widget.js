Template.FileInput.created = function(){
  this.data.uploader = new Slingshot.Upload( this.data.field.directive );
};


Template.FileInput.events({
  'click .btn-upload' : function( event, template ){
    event.preventDefault();

    var file = template.find( "input[type=file]" ).files[0];

    this.uploader.send( file, function( err, downloadURL ){
      if ( err ){
        var errs = this._errors.get();
        errs.push( err );
        this._errors.set( errs );
        return;
      }
      this.value = downloadURL;
      this.validate();
    }.bind( this ))
  }
})


Template.progressBar.helpers({
  progress: function (){
    var prog = Math.round( this.uploader.progress() * 100 );
    if ( prog === 100 ) return
    else return prog;
  }
});
