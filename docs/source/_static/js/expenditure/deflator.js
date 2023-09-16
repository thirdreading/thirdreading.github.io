// Declarations
var Highcharts;
var seriesOptions = [];
var uri = "https://raw.githubusercontent.com/thirdreading/investments/develop/warehouse/deflator/series.json";


// Generate curves
jQuery.getJSON(uri, function (calculations){


	// Data
	seriesOptions[0] = {
		name: calculations.description,
		data: calculations.data
	};


  // Definitions
  var groupingUnits = [[
      'year',   // unit name
      [1]       // allowed multiples
    ]];


  // Numbers
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });


  // Draw a graph
  Highcharts.chart('container0005', {


		// Chart
    chart: {
      type: 'spline',
      zoomType: 'xy',
      marginTop: 65
    },


		// Title
    title: {
      text: 'Deflator Series'
    },


		// Subtitle
    subtitle: {
      text: '<p>Country: United Kingdom, Base Year: ' + calculations.attribute[0].year + '</p>'
    },


		// Time
    time: {
      // timezone: 'Europe/London'
    },


		// Credits
    credits: {
      enabled: false
    },


		// Legend
    legend: {
      enabled: true,
      width: 600,
      x: 65,
      y: -95,
      align: 'middle'
    },


		// Graph caption
    caption: {
      verticalAlign: "bottom",
      y: 25,
      text: '<p>This series is a <b>rebased</b> United Kingdom Treasury\'s deflator series.  At present, the base ' +
        'year of the treasury\'s series is the latest year of the series; the series is rebased such ' +
        'that the base year is <b>' + calculations.attribute[0].year + '</b>. <br/><br/>' +
        '[Source: <a href="https://www.gov.uk/government/collections/gdp-deflators-at-market-prices-and-money-gdp#full-publication-update-history" target="_blank">' +
        '<span style="text-decoration: underline;">The gross domestic product (GDP) deflators at market prices, and money GDP</span></a>]</p>'
    },


		// Export options
    exporting: {
      buttons: {
        contextButton: {
          menuItems: [ 'viewFullscreen', 'printChart', 'separator',
            'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG' , 'separator',
            'downloadXLS', 'downloadCSV']
        }
      }
    },


		// The y-axis
    yAxis: {
      labels: {
        align: 'left',
        x: 5
      },
      title: {
        text: 'monetary units',
        align: 'middle',
        x: 7
      },
      min: 0,
      lineWidth: 2,
      resize: {
        enabled: true
      },
      plotLines: [{
        value: calculations.attribute[0].rebase,
        width: 2,
        color: '#5b5b5b'
      }]
    },


		// The x-axis
    xAxis: {
      type: 'datetime',
      title: {
          text: 'Year'
      },
      maxPadding: 0.05,
      gridLineWidth: 1,
      plotLines: [{
        value: calculations.attribute[0].epoch,
        width: 1,
        color: '#5b5b5b'
      }]
    },


		// Tooltip
    tooltip: {
      dateTimeLabelFormats: {
        millisecond: "%A, %e %b, %H:%M:%S.%L",
        second: "%A, %e %b, %H:%M:%S",
        minute: "%A, %e %b, %H:%M",
        hour: "%A, %e %b, %H:%M",
        day: "%A, %e %B, %Y",
        week: "%A, %e %b, %Y",
        month: "%B %Y",
        year: "%Y"
      }
    },


		// Plot options
    plotOptions: {
      series: {
        turboThreshold: 4000,
        color: '#5b5b5b5',
        marker: {
          enabled: true,
          radius: 3,
          fillColor: '#5b5b5b'
        },
        dataGrouping: {
          units: groupingUnits
        },
        tooltip: {
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{series.name}</b>:<br/>' +
            '&nbsp; &nbsp;{point.y:,.2f}<br/>'
        }
      }
    },


    series: seriesOptions


  });

});