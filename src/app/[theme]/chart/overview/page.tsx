
'use client';
import { DashboardLayoutComponent, PanelsDirective, PanelDirective, } from '@syncfusion/ej2-react-layouts';
import { Browser } from '@syncfusion/ej2-base';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries, AccumulationTooltip, ColumnSeries, SeriesCollectionDirective, SeriesDirective,
  AccumulationDataLabel, ChartComponent, Legend, Category, Tooltip,Highlight, DataLabel, SplineAreaSeries, IAxisLabelRenderEventArgs, ChartAnnotation, AnnotationsDirective, AnnotationDirective, ILegendRenderEventArgs, ILoadedEventArgs, ChartTheme, IAccLoadedEventArgs, AccumulationTheme, IAccPointRenderEventArgs,
} from '@syncfusion/ej2-react-charts';
const SAMPLE_CSS = `
.e-dashboardlayout {
  padding: 20px;
  z-index: 0;
}
.e-panel {
  cursor: auto !important;
}
.e-panel-header{
  border: none !important;
  background-color: backgroundcolor;
  height: 50px !important;
  display: flex;
  align-items: center;
  justify-content: center;
} 
.template{
  height: 100%;
  width: 100%;
}

#control-container {
    padding: 0px !important;
}
#gradient-chart stop {
    stop-color: #2485FA;        
}
#gradient-chart1 stop{
    stop-color: #FEC200;
} 
.ellipse[id*=_Trackball_1] {
  strokeWidth: 1 !important;
}
.e-chart-focused:focus {
  outline: none !important;
}
.title{
  font-size: 15px;
  font-weight: bold;
  color: #737373;
}

}`;
let argument: IArguments;
function OverView() {

  function columnTemplate() {
    return (
      <div className="template" >
        <ChartComponent style={{ "height": "100%", "width": "100%", }} primaryXAxis={{ valueType: 'Category',  majorGridLines: { width: 0 },labelStyle:{size:'11px'} }}  load={load.bind(this)} primaryYAxis={{
          minimum:0, maximum:100, majorTickLines: { width: 0 }, labelFormat: '{value}%', lineStyle: { width: 0 }, labelStyle:{size:'11px'}, titleStyle:{size:'13px'} ,
        }} tooltip={{ enable: false }} legendSettings={{ padding:5, shapeHeight:8, shapeWidth:8}} chartArea={{ border: { width: 0 } }}  >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="Column" dataSource={[
              { Period: '2017', Percentage: 60 },
              { Period: '2018', Percentage: 56 },
              { Period: '2019', Percentage: 71 },
              { Period: '2020', Percentage: 85 },
              { Period: '2021', Percentage: 73 },]}
              name="Online" xName="Period" yName="Percentage" fill='#2485FA' marker={{ dataLabel: { visible: true, position: 'Middle', font: { color: 'white' } } }}></SeriesDirective>
            <SeriesDirective type="Column" dataSource={[
              { Period: '2017', Percentage: 40 },
              { Period: '2018', Percentage: 44 },
              { Period: '2019', Percentage: 29 },
              { Period: '2020', Percentage: 15 },
              { Period: '2021', Percentage: 27 },]}
              name="Retail" xName="Period" yName="Percentage" fill='#FEC200' marker={{ dataLabel: { visible: true, position: 'Middle', font: { color: 'white' } } }}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    );
  }
  function splineTemplate() {
    return (
      <div className="template" >
        <ChartComponent style={{ "height": "100%", "width": "100%" }}
          primaryXAxis={{ majorTickLines: { width: 0 },valueType: "Category", majorGridLines: { width: 0 } ,labelStyle:{size:'11px'}}}
          load={load.bind(this)}
          primaryYAxis={{
            majorTickLines: { width: 0 },
            minimum: 0, maximum: 12000,  edgeLabelPlacement: 'Shift', labelFormat: '${value}', lineStyle: { width: 0 },labelStyle:{size:'11px'},titleStyle:{size:'13px'}
          }} 
          legendSettings={{enableHighlight:true }} tooltip={{ enable: true , shared: true, enableMarker:false}} chartArea={{ border: { width: 0 } }}  >
          <Inject services={[SplineAreaSeries, Legend, Tooltip, Category, ChartAnnotation, Highlight]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective type="SplineArea" dataSource={[{ period : 'Jan', percentage : 3600   }, { period: 'Feb', percentage: 6200  },
                { period: 'Mar', percentage: 8100  }, { period: 'Apr', percentage: 5900  },
                { period: 'May', percentage: 8900  }, { period: 'Jun', percentage: 7200  },
                { period: 'Jul', percentage: 4300  }, { period: 'Aug', percentage: 4600  },
                { period: 'Sep', percentage: 5500  }, { period: 'Oct', percentage: 6350  },
                { period: 'Nov', percentage: 5700  }, { period: 'Dec', percentage: 8000  },]} xName="period" yName="percentage" name="Online" width={2.5} marker={{ visible: false }} fill="#2485FA" opacity={0.3} border={{width:2.75, color:'#2485FA'}}></SeriesDirective>
                <SeriesDirective type="SplineArea" dataSource={[{ period : 'Jan', percentage : 6400   }, { period: 'Feb', percentage: 5300   },
                { period: 'Mar', percentage: 4900   }, { period: 'Apr', percentage: 5300   },
                { period: 'May', percentage: 4200   }, { period: 'Jun', percentage: 6500   },
                { period: 'Jul', percentage: 7900   }, { period: 'Aug', percentage: 3800   },
                { period: 'Sep', percentage: 6800   }, { period: 'Oct', percentage: 3400   },
                { period: 'Nov', percentage: 6400   }, { period: 'Dec', percentage: 6800   },]} xName="period" yName="percentage" name="Retail" width={2.5} marker={{ visible: false }} fill="#FEC200" opacity={0.3} border={{width:2.75, color:'#FEC200'}}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    );
  }
  function pieTemplate() {
    return (
      <div className="template" >
        <AccumulationChartComponent style={{ "height": "100%", "width": "100%" }}
        legendSettings={{ visible:false }} load={accumulationload.bind(this)} tooltip={{ enable: true , format:"${point.tooltip}"}} pointRender={onPointRender.bind(this)} enableSmartLabels={false}  enableBorderOnMouseMove={false}>
          <Inject services={[PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}></Inject>
          <AccumulationSeriesCollectionDirective>

            <AccumulationSeriesDirective  tooltipMappingName='Product' dataLabel={{
              visible: true, 
              position: 'Outside', name: 'r',
              connectorStyle:{length:'10px',type:'Curve'}
            }}  type="Pie" palettes={["#61EFCD", "#CDDE1F", "#FEC200", "#CA765A", "#2485FA", "#F57D7D", "#C152D2",
              "#8854D9", "#3D4EB8", "#00BCD7", "#4472c4", "#ed7d31", "#ffc000", "#70ad47", "#5b9bd5", "#c1c1c1", "#6f6fe2", "#e269ae", "#9e480e", "#997300"]} dataSource={
                [
                { Product: "TV : 30 (12%)", Percentage: 12 , r: "TV, 30 <br>12%"},
                { Product: "PC : 20 (8%)", Percentage: 8 , r: "PC, 20 <br>8%"},
                { Product: "Laptop : 40 (16%)", Percentage: 16 , r: "Laptop, 40 <br>16%"},
                { Product: "Mobile : 90 (36%)", Percentage: 36 , r: "Mobile, 90 <br>36%"},
                { Product: "Camera : 27 (11%)", Percentage: 11 , r: "Camera, 27 <br>11%"},]}
              xName="Product" yName="Percentage" innerRadius="40%" border={{width:3,color:'transparent'}}></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    )
  }
  
    let cellSpacing: number[] = [15, 15];
    return (<div>
      <div className="control-section">
      <style>{SAMPLE_CSS}</style>
        <DashboardLayoutComponent cellSpacing={cellSpacing} cellAspectRatio={Browser.isDevice ? 1 : 0.8} columns={Browser.isDevice ? 2 : 8}>
          <PanelsDirective>
            <PanelDirective sizeX={Browser.isDevice ? 1: 5} sizeY={Browser.isDevice ? 1 : 2} row={0} col={0} content={columnTemplate.bind(this) as any} header='<div class="title" id="header1";>Sales - Yearly Performance</div>'></PanelDirective>
            <PanelDirective sizeX={Browser.isDevice ? 1 : 3} sizeY={Browser.isDevice ? 1 : 2} row={0} col={ Browser.isDevice ? 1 : 5} content={pieTemplate.bind(this) as any} header='<div  class="title" id="header2";>Product Wise Sales - 2021</div>'></PanelDirective>
            <PanelDirective sizeX={Browser.isDevice ? 2 : 8} sizeY={Browser.isDevice ? 1 : 3} row={Browser.isDevice ? 1 : 4} col={0} content={splineTemplate.bind(this) as any} header='<div  class="title" id="header3";>Monthly Sales for 2021</div>'></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>
      <div id="action-description">
                <p>
                This sample shows an overview of <a target="_blank" href="https://www.syncfusion.com/react-components/react-charts" >React Charts</a> that allows users to visualize data easily and take decisions based on it. There are different types of charts to create feature rich apps.
            </p>
                </div>
                <div id="description">
                    <p>
                    The React Chart is a well-crafted charting component to visualize data.In this example, you will see how to render and configure line, column, and pie charts with different features such as highlight, legend, tooltip, and annotation . The Chart uses <code>SfDataManager</code>, which supports both RESTful JSON data services binding and IEnumerable binding. 
                    </p>
                    <p>
                    More information on the React Chart types can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/chart/chart-types/line">documentation section</a>.
                    </p>
                </div>
<svg style={{ height: '0' }}>
    <defs>       
        <linearGradient id="gradient-chart" style={{opacity: 0.75}} className="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
         <linearGradient id="gradient-chart1" style={{opacity: 0.75}} className="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
    </defs>
</svg>
    </div>
    );
  function load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.pathname.split('/').slice(3)[0];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,'Contrast') as ChartTheme;
    args.chart.series[0].fill = 'url(#' + 'gradient-chart)';
    args.chart.series[1].fill = 'url(#' + 'gradient-chart1)'; 
};
function accumulationload(args: IAccLoadedEventArgs): void {
  let selectedTheme: string = location.pathname.split('/').slice(3)[0];
  selectedTheme = selectedTheme ? selectedTheme : 'Material';
  args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
  replace(/-dark/i, "Dark").replace(/contrast/i,'Contrast') as AccumulationTheme;
};
function onPointRender(args: IAccPointRenderEventArgs): void {
    let selectedTheme: string = location.pathname.split('/').slice(3)[0];
    let layoutColor: string;
    selectedTheme = selectedTheme ? selectedTheme : 'Material';

    if (selectedTheme.indexOf('dark') > -1) {

      if (selectedTheme.indexOf('material') > -1) {

        args.border.color = '#303030';
        layoutColor= '#303030' ;
      }

      else if (selectedTheme.indexOf('bootstrap5') > -1) {

        args.border.color = '#212529';
        layoutColor= '#212529' ;
      }

      else if (selectedTheme.indexOf('bootstrap') > -1) {

        args.border.color = '#1A1A1A';
        layoutColor= '#1A1A1A' ;
      }
      else if (selectedTheme.indexOf('fabric') > -1) {

        args.border.color = '#201f1f';
        layoutColor= '#201f1f' ;

      }

      else if (selectedTheme.indexOf('fluent') > -1) {

        args.border.color = '#252423';
        layoutColor= '#252423' ;

      }

      else if (selectedTheme.indexOf('bootstrap') > -1) {

        args.border.color = '#1A1A1A';
        layoutColor= '#1A1A1A' ;

      }
      else if (selectedTheme.indexOf('tailwind') > -1) {

        args.border.color = '#1F2937';
        layoutColor= '#1F2937' ;
      }

      else {

        args.border.color = '#222222';
        layoutColor= '#222222' ;
      }

    }

    else if (selectedTheme.indexOf('highcontrast') > -1) {

      args.border.color = '#000000';
      layoutColor= '#000000' ;
    }

    else {

      args.border.color = '#FFFFFF';
     layoutColor= '#FFFFFF' ;
    }
    if(selectedTheme.indexOf('highcontrast') > -1 || selectedTheme.indexOf('dark') > -1)
    {
      let element =  document.querySelector('#header1') as HTMLElement 
      element.style.color='#F3F2F1';
      let element1 =  document.querySelector('#header2') as HTMLElement 
      element1.style.color='#F3F2F1';
      let element2 =  document.querySelector('#header3') as HTMLElement 
      element2.style.color='#F3F2F1';
    }
    let element =  document.querySelector('#layout_0template') as HTMLElement 
    element.style.background=layoutColor;
    let elementBody =  document.querySelector('#layout_0_body') as HTMLElement 
    elementBody.style.background=layoutColor;
    let element1 =  document.querySelector('#layout_1template') as HTMLElement 
    element1.style.background=layoutColor;
    let elementBody1 =  document.querySelector('#layout_1_body') as HTMLElement 
    elementBody1.style.background=layoutColor;
    let element2 =  document.querySelector('#layout_2template') as HTMLElement 
    element2.style.background=layoutColor;
    let elementBody2 =  document.querySelector('#layout_2_body') as HTMLElement 
    elementBody2.style.background=layoutColor;
};
}
export default OverView;
