(function() {

  var pictures = document.getElementsByTagName('picture'),
      test = {
        picture: 'HTMLPictureElement' in window,
        source: 'HTMLSourceElement' in window,
        srcset: 'srcset' in document.createElement('source')
      };

  if (test.picture && test.source && test.srcset) {
    return false;
  }

  function renderPicture() {

    var i = -1, picture,
      picturesLength = pictures.length, img,
      sources, source, j, sourcesLength, media, mM, matched;

    while (++i < picturesLength) {

      picture = pictures[i];
      img = picture.getElementsByTagName('img')[0];
      img.setAttribute('data-src', img.getAttribute('src'));
      sources = picture.getElementsByTagName('source');

      j = -1;
      matched = false;
      sourcesLength = sources.length;
      while (++j < sourcesLength) {

        source = sources[j];

        if (source.getAttribute('media') != media) {
          media = source.getAttribute('media');
          mM = window.matchMedia(media);
        }

        if (mM.matches) {
          matched = true;
          img.setAttribute('src', source.getAttribute('srcset'));
          break;
        }

      }

      if (!matched) {
        img.setAttribute('src', img.getAttribute('data-src'));
      }

    }

  }

  renderPicture();
  window.onresize = renderPicture();

})();