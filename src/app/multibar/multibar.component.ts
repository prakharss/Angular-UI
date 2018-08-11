import { Component, OnInit } from '@angular/core';
import { DATA } from '../../mock-data';

declare let d3 : any;

@Component({
  selector: 'app-multibar',
  templateUrl: './multibar.component.html',
  styleUrls: ['./multibar.component.css']
})
export class MultibarComponent implements OnInit {
  options;
  data;
  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'multiBarChart',
        height: 500,
        showValues : true,
        width: 800,
        forceY: [0, 200, 400, 600, 800, 1000],
        showControls:false,
        showLegend : true,
        color: ['#66B2B1', '#d3a0b3'],
        style: {
          opacity: 0
        },
        margin: {
          top: 30,
          right: 90,
          bottom: 140,
          left: 150
        },

        x: function(d){return d.label;},
        y: function(d){return d.value;},
        valueFormat: function(d){
          return d3.format(',.0f')(d);
        },
        duration: 500,
        showXAxis : true,
        showYAxis : true,
        stacked : true,
        clipEdge: true,
        xAxis: {
          axisLabel: 'Provider',
          axisLabelDistance: -1
          
        },
        yAxis: {
          axisLabel: 'Population',
          axisLabelDistance: -1,
          showMaxMin: false

        },
        tooltips: true,
        groupSpacing: 0.5,
        headerEnabled: true,

        tooltip: {
          contentGenerator: function (d, x, y) {
            const table = d3.select(document.createElement('table'));
            if (true) {
              const theadEnter = table.selectAll('thead')
                .data([d])
                .enter().append('thead');

              theadEnter.append('tr')
                .append('td')
                .attr('colspan', 3)
                .append('strong')
                .classed('x-value', true)
                .html(d.value);
            }

            const tbodyEnter = table.selectAll('tbody')
              .data([d])
              .enter().append('tbody');

            const trowEnter = tbodyEnter.selectAll('tr')
              .data(function (p) {
                return p.series;
              })
              .enter()
              .append('tr')
              .classed('highlight', function (p) {
                return p.highlight;
              });

            trowEnter.append('td')
              .classed('legend-color-guide', true)
              .append('div')
              .style('background-color', function (p) {
                return p.color;
              });
              

            trowEnter.append('td')
              .classed('key', true)
              .classed('total', function (p) {
                return !!p.total;
              })
              .html(function (p, i) {
                return p.key;
              });

            trowEnter.append('td')
              .classed('value', true)
              .html(function (p, i) {
                return p.values;
              });
            trowEnter.append('td')
              .classed('value', true)
              .html(function (p, i) {
                return (':');
             });
            trowEnter.append('td')
              .classed('value', true)
              .html(function (p, i) {
                return p.value;
              });

            trowEnter.filter(function (p, i) {
              return p.percent !== undefined;
            }).append('td')
              .classed('percent', true)
              .html(function (p, i) {
                return '(' + d3.format('%')(p.percent) + ')';
              });

            trowEnter.selectAll('td').each(function (p) {
              if (p.highlight) {
                const opacityScale = d3.scale.linear().domain([0, 1]).range(['#fff', p.color]);
                const opacity = 0.6;
                d3.select(this)
                  .style('border-bottom-color', opacityScale(opacity))
                  .style('border-top-color', opacityScale(opacity))
                ;
              }
            });

            const html = table.node().outerHTML;
            if (d.footer !== undefined) {
              this.html += '<div class="footer">' + d.footer + '</div>';
            }
            return html;
          }
        }
      }
    }
  //   this.data = [
  //     {
  //       key: "Compliance",
  //       values: [
  //         {
  //           "label" : "Pbgs",
  //           "value" : 100
  //         } ,
  //         {
  //           "label" : "Astrocare" ,
  //           "value" : 170
  //         } ,
  //         {
  //           "label" : "Brightpoint" ,
  //           "value" : 150
  //         } ,
  //         {
  //           "label" : "Citicare" ,
  //           "value" : 160
  //         } ,
  //         {
  //           "label" : "Ehs" ,
  //           "value" : 80
  //         } 
          
  //       ]
  //     },
  //     {
  //       key: "Non-Compliance",
  //       values: [
  //         {
  //           "label" : "Pbgs",
  //           "value" : 360
  //         } ,
  //         {
  //           "label" : "Astrocare" ,
  //           "value" : 150
  //         } ,
  //         {
  //           "label" : "Brightpoint" ,
  //           "value" : 150
  //         } ,
  //         {
  //           "label" : "Citicare" ,
  //           "value" : 110
  //         } ,
  //         {
  //           "label" : "Ehs" ,
  //           "value" : 150
  //         } 
          
  //       ]
  //     }
      
      
    // ];
    this.data = DATA;
  }
}
