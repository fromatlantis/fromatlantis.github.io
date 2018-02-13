var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [
    { // list of graph elements to start with  node a
      data: {
        id: 'a',
        image: 'images/baitu.png'
      }
    }, { // node b
      data: {
        id: 'b',
        image: 'images/bianfu.png'
      }
    }, {
      data: {
        id: 'c',
          image: 'images/daxiang.png'
      }
    }, {
      data: {
        id: 'd',
        image: 'images/bianselong.png'
      }
    }, {
      data: {
        id: 'e',
        image: 'images/dashu.png'
      }
    }, {
      data: {
        id: 'f',
        image: 'images/hashiqi.png'
      }
    }, {
      data: {
        id: 'g',
        image: 'images/dog.png'
      }
    }, {
      data: {
        id: 'h',
        image: 'images/gongji.png'
      }
    }, { // edge ab
      data: {
        id: 'ab',
        source: 'a',
        target: 'b'
      }
    }, {
      data: {
        id: 'bc',
        source: 'b',
        target: 'c'
      }
    }
  ],
  zoomingEnabled: true,
  hideEdgesOnViewport: true,
  motionBlur: true,
  motionBlurOpacity: 0.2,
  style: [
    { // the stylesheet for the graph
      selector: 'node',
      style: {
        'background-color': '#1798f2',
        'label': 'data(id)',
        'background-image': 'data(image)',
        'background-fit':'cover cover',
        'background-image-opacity': 0.5,
        'background-color': '#1798f2',
        'width':'70px',
        'height':'70px'
      }
    }, { // the stylesheet for the graph
      selector: 'node:selected',
      style: {
        'border-color': '#ECA87F',
        'border-width': '4'
      }
    }, {
      selector: 'edge',
      style: {
        'width': 1,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],
  layout: {
    name: 'grid',
    rows: 1
  }

});

cy.ready(function() {
  console.log("graph init finished!");
});
window.onresize = function() {
  cy.resize();
  cy.fit();
}
/**
$(function() {
  var buttons = $(".button");
  $.each(buttons, function(index, button) {
    $(this).on('click', function() {
      var layout = $(this).attr('data-layout');
      var ly = cy.layout({
        name: layout || 'grid'
      });
      ly.run();
    })
  })
})
**/
