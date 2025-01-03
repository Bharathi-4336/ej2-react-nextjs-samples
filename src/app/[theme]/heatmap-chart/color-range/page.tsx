'use client';
import { useRef, useState } from "react";
import { HeatMapComponent, Legend, Tooltip, ILoadedEventArgs, HeatMapTheme, Inject, TitleModel, AxisModel, PaletteSettingsModel, CellSettingsModel, PaletteType } from '@syncfusion/ej2-react-heatmap';
import data from './color-range-sample-data.json';
import PropertyPane from '@/common/property-pane';
import { RadioButtonComponent, ChangeEventArgs, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

// custom code start
const SAMPLE_CSS: any = `
    #control-container {
        padding: 0px !important;
    }
    #source{
        float: right; margin-right: 10p
    }`;
// custom code end
const ColorRange = () => {

    const [paletteType, setPaletteType] = useState<PaletteType>('Gradient');
    let heatmap = useRef<HeatMapComponent>(null);
    let title: TitleModel = {
        text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
        textStyle: {
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit',
            size: '15px',
        }
    }
    let xAxis: AxisModel = {
        labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
        labelIntersectAction: 'None',
        labelRotation: 45,
        textStyle: {
            fontFamily: 'inherit'
        }
    }
    let yAxis: AxisModel = {
        labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior', 'Justice', 'NASA', 'Transportation'],
        textStyle: {
            fontFamily: 'inherit'
        }
    }
    let paletteSettings: PaletteSettingsModel = {
        palette: [
            { startValue: 5, endValue: 15, minColor: '#FFFFDA', maxColor: '#EDF8B6' },
            { startValue: 15, endValue: 20, minColor: '#CAE8B4', maxColor: '#78D1BD' },
            { startValue: 20, endValue: 31.7, minColor: '#36BCC6', maxColor: '#208FC6' },
        ],
        type: paletteType
    }
    let cellSettings: CellSettingsModel = {
        border: { width: 0 },
        showLabel: false
    }

    const fixed = (): void => {
        setPaletteType('Fixed');
        heatmap.current.dataBind();
    }

    const gradient = (): void => {
        setPaletteType('Gradient');
        heatmap.current.dataBind();
    }

    const load = (args: ILoadedEventArgs): void => {
        // custom code start
        let selectedTheme: string = location.pathname.split('/').slice(3)[0];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark") as HeatMapTheme;
         // custom code end
        if (args.heatmap.element.offsetWidth < 500) {
            args.heatmap.xAxis.labelRotation = 0;
            args.heatmap.xAxis.labelIntersectAction = 'Trim';
        } else {
            args.heatmap.xAxis.labelRotation = 45;
            args.heatmap.xAxis.labelIntersectAction = 'None';
        }
    };

    return (
        <div>
            <div className='col-md-9 control-section'>
                {/* custom code start */}
                <style>{SAMPLE_CSS}</style>
                {/* custom code end */}
                <HeatMapComponent id='heatmap-container' ref={heatmap} titleSettings={title} legendSettings={{ textStyle:{ fontFamily: 'inherit' } }} tooltipSettings={{ textStyle:{ fontFamily: 'inherit' } }} xAxis={xAxis} yAxis={yAxis} dataSource={(data as any).colorRangeSample} paletteSettings={paletteSettings} cellSettings={cellSettings} load={load.bind(this)}>
                    <Inject services={[Legend, Tooltip]} />
                </HeatMapComponent>
            </div>
            <div className="col-md-3 property-section">
                <PropertyPane title='Properties'>
                    <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%', marginLeft: -10 }}>
                        <tbody>
                            <tr style={{ height: '50px' }}>
                                <td style={{ width: '60%' }}>
                                    <div>Palette Type:</div>
                                </td>
                                <td style={{ width: '40%' }}>
                                    <div className='row'>
                                        <RadioButtonComponent id='fixed' label='Fixed' name='paletteType' value="Fixed" change={fixed} />
                                    </div>
                                    <div className='row'>
                                        <RadioButtonComponent id='gradient' checked={true} label='Gradient' name='paletteType' value="Gradient" change={gradient} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </PropertyPane>
            </div>
            <div id="action-description">
                <p>
                    This sample visualizes the energy consumption in trillion British thermal units (btu) by
                    the various public sectors in US government over the years. The data label is disabled in this sample,
                    the tooltip displays the data point values.  In property panel, the options are available to change
                    palette type in Heatmap by means of radio button.
                </p>
            </div>
            <div id="description">
                <p>
                This example explains how to provide a specific color for specific range in heatmap. The <a href="https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollectionModel/#startvalue" target="_blank"> startValue </a> and <a href="https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollectionModel/#endvalue" target="_blank"> endValue </a> properties are used to define the range start and end values. The <a href="https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollectionModel/#mincolor" target="_blank"> minColor </a> and <a href="https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollectionModel/#maxcolor" target="_blank"> maxColor </a> properties represent the colors of given range.
                </p>
                <p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p>
                <br></br>
                <p><b>Injecting Module</b></p>
                <p>
                    Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target="_blank"
                    href="https://ej2.syncfusion.com/react/documentation/heatmap-chart/tooltip">Tooltip</a> and <a target="_blank"
                    href="https://ej2.syncfusion.com/react/documentation/heatmap-chart/legend">Legend</a> module using the <code>{'<Inject services={[Tooltip, Legend]} />'}</code> method.
                </p>
            </div>
        </div >
    );
}
export default ColorRange;