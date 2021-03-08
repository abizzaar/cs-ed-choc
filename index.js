(function () {
  $(document).ready(function () {

      var canvas, choc, editor, pad, code;
      choc = window.choc;
      code =
        `let MAX_DEPTH = 3
init()

function init() {
  let tri = [[199, 50], [40, 350], [380, 200]]
  drawTriangle(tri)
  recurse(tri, 0)
}

function recurse(tri, depth) {
  if (depth === MAX_DEPTH) {
    return;
  }
  
  let center_one = findCenter(tri[0], tri[1])
  let center_two = findCenter(tri[1], tri[2])
  let center_three = findCenter(tri[2], tri[0])
  let centers = [center_one, center_two, center_three]

  drawTriangle(centers)
  
  let new_triangle_one = [centers[0], centers[1], tri[1]]
  recurse(new_triangle_one, depth + 1);
  
  let new_triangle_two = [centers[1], centers[2], tri[2]]
  recurse(new_triangle_two, depth + 1);
  
  let new_triangle_three = [centers[2], centers[0], tri[0]]
  recurse(new_triangle_three, depth + 1);
}


function drawTriangle(tri) {
  pad.makeLine(tri[0][0], tri[0][1], tri[1][0], tri[1][1])
  pad.makeLine(tri[1][0], tri[1][1], tri[2][0], tri[2][1])
  pad.makeLine(tri[2][0], tri[2][1], tri[0][0], tri[0][1])
}

function findCenter(pt_one,pt_two) {
  return [(pt_one[0] + pt_two[0]) / 2, (pt_one[1] + pt_two[1]) / 2]
}`

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
    })
}.call(this));