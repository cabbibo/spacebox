
function Song( params ){

  this.url =  'http://api.soundcloud.com/tracks/' +
              params.soundcloudID +
              '/stream?client_id=2400df97862fa2c06f486af524e4f974';

  var vs = shaders.vs[ params.material ];
  var fs = shaders.fs[ params.material ];
  
  this.material = new THREE.ShaderMaterial({

      uniforms:         params.uniforms,
      vertexShader:     vs,
      fragmentShader:   fs,
      shading: THREE.FlatShading

  });

  this.mesh = new THREE.Mesh( params.geometry , this.material );

  this.mesh.position.copy( params.position );

  this.mesh.hoverOver = this.hoverOver.bind( this );
  this.mesh.hoverOut  = this.hoverOut.bind( this );
  this.mesh.select    = this.select.bind( this );
  this.mesh.deselect  = this.deselect.bind( this );

  scene.add( this.mesh );
  objectControls.add( this.mesh );

}

Song.prototype.play = function(){

  audio.src = this.url;
  source.mediaElement.play();

}

Song.prototype.hoverOver = function(){
  console.log( 'HOVER OV');
}


Song.prototype.hoverOut = function(){
  console.log( 'HOVER OV');
}


Song.prototype.select = function(){
  this.play();
}


Song.prototype.deselect = function(){



}






