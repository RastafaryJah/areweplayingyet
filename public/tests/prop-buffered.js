({
  name: 'prop-buffered',
  description: 'Property "buffered"',
  spec: 'http://dev.w3.org/html5/spec/Overview.html#dom-media-buffered',
  longdesc: '',
  assert: function(finish) {
    var audio = this.audio = new Audio();

    audio.addEventListener('loadedmetadata', function() {
      finish( audio.buffered && audio.buffered.length );
    }, false);

    audio.setAttribute('preload', 'metadata');
    audio.setAttribute('src', AWPY.sound.short.stream_url(true));
  }
})