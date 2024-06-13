/**
 * Sample for Stock Chart without Navigator
 */
'use client';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, Crosshair, DateTime, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, IStockChartEventArgs, ChartTheme } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from '../indicator-data';

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .charts {
        align :center
    }`;
const Navigator = () => {

    const load = (args: IStockChartEventArgs): void => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast') as ChartTheme;
    };

    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <StockChartComponent id='stockchartnavigator' style={{ textAlign: "center" }} primaryYAxis={{ lineStyle: { color: 'transparent' }, majorTickLines: { color: 'transparent', height: 0 } }} primaryXAxis={{ majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true } }} load={load.bind(this)} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} crosshair={{ enable: true }} enableSelector={false}>
                    <Inject services={[DateTime, LineSeries, Crosshair, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
                    <StockChartSeriesCollectionDirective>
                        <StockChartSeriesDirective dataSource={chartData} type='Line' xName='x' />
                    </StockChartSeriesCollectionDirective>
                </StockChartComponent>
            </div>
            <div id="action-description">
                <p>By hiding the range selector in the stock chart, this sample visualizes the AAPL stock price. The tooltip and crosshair display data and period information.</p>
            </div>
            <div id="description">
                <p>
                    In this example, you can see how to render and configure stock chart to visualize the stock data. The <a target="_blank" href="https://helpej2.syncfusion.com/react/documentation/api/stock-chart/stockChartModel/#enableselector">enableSelector</a> property allows to toggle the visibility of range selector.
                </p>
                <p>
                    <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the chart or tap on it in touch enabled devices.
                </p>
                <br></br>
                <p>Injecting Module</p>
                <p>
                    The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
                    the <code>DateTime</code> module using the <code>StockChart.Inject(DateTime)</code> method.  To use the LineSeries, inject the <code>LineSeries</code> module using the <code>StockChart.Inject(LineSeries)</code> method.
                </p>
                <p>
                    More information about the series type can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/stock-chart/series-types">documentation section</a>.
                </p>
            </div>
        </div>
    )
}
export default Navigator;
