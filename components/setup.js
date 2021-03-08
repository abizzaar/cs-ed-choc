function setupAbizarCode (code, timeline = false) {
  code += '\n\nundefined // ignore this'
  var canvas, choc, editor, pad;
  choc = window.choc;

  pad = new Two({
    width: 400,
    height: 400,
    type: Two.Types.canvas
  }).appendTo(document.getElementById('canvas'));
  if (window.devicePixelRatio === 2) {
    canvas = pad.renderer.domElement;
    canvas.setAttribute('width', canvas.width * 2);
    canvas.setAttribute('height', canvas.height * 2);
    pad.renderer.ctx.scale(2, 2);
  }
  editor = new choc.Editor({
    $: $,
    id: "#choc-editor",
    code: code,
    timeline: timeline,
    timelineValues: false,
    maxIterations: 100000,
    beforeScrub: function () {
      return pad.clear();
    },
    afterScrub: function () {
      return pad.update();
    },
    locals: {
      pad: pad
    }
  });
  editor.start();
}