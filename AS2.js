// window:load event for Javascript to run after HTML
// because this Javascript is injected into the document head
window.addEventListener('load', function() {
    // Javascript code to execute after DOM content
    
    // full ZingChart schema can be found here:
    // https://www.zingchart.com/docs/api/json-configuration/
    const myConfig = {
      type: 'bar',
      title: {
        text: 'Website Traffic Metrics',
        fontSize: 24,
        color: '#5d7d9a'
      },
      legend: {
              draggable: true,
      },
      scaleX: {
        // set scale label
        label: { text: 'Data Range' },
        // convert text on scale indices
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      scaleY: {
        // scale label with unicode character
        label: { text: 'Metrics' }
      },
          plot: {
        // animation docs here:
        // https://www.zingchart.com/docs/tutorials/design-and-styling/chart-animation/#animation__effect
        animation:{
          effect: 'ANIMATION_EXPAND_BOTTOM', 
          method: 'ANIMATION_STRONG_EASE_OUT',
          sequence: 'ANIMATION_BY_NODE',
          speed: 275,
        }
      },
      series: [
        {
          // plot 1 values, linear data
          values: [543,220,2537,2239,825,2317,1125],
          text: 'Week 1', 
          backgroundColor: '#4d80a6'
        },
        {
          // plot 2 values, linear data
          values: [2535,1242,1333,1249,2335,2147,2235],
          text: 'Week 2',
          backgroundColor: '#70cfeb'
        },
        {
          // plot 2 values, linear data
          values: [3415,2122,1113,1343,1454,2567,2131],
          text: 'Week 3',
          backgroundColor: '#8ee9de'
        }
      ]
    };
  
    // render chart with width and height to
    // fill the parent container CSS dimensions
    zingchart.render({ 
      id: 'myChart', 
      data: myConfig, 
      height: '100%', 
      width: '100%' 
    });
  });
  