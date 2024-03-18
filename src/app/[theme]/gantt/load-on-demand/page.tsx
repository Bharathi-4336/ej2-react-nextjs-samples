'use client';
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective,VirtualScroll } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const LoadOnDemand = () => {
  const dataSource: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/GanttLoadOnDemand',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  const taskFields: any = {
    id: 'taskId',
    name: 'taskName',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    progress: 'progress',
    hasChildMapping: 'isParent',
    parentID: 'parentID'
  };
  const projectStartDate: Date = new Date('01/02/2000');
  const projectEndDate: Date = new Date('12/01/2002');

  return (
    <div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='LoadOnDemand' dataSource={dataSource} treeColumnIndex={1}
          taskFields={taskFields} enableVirtualization={true} loadChildOnDemand={false} height='460px'
          projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
          <ColumnsDirective>
            <ColumnDirective field='taskId' width='80' ></ColumnDirective>
            <ColumnDirective field='taskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
            <ColumnDirective field='startDate'></ColumnDirective>
            <ColumnDirective field='duration'></ColumnDirective>
            <ColumnDirective field='progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, VirtualScroll]} />
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>This sample demonstrates the load on-demand data binding support in Gantt Chart. It allows users to load parent records alone on load time.
          Child records render on demand during expansion action.</p>
      </div>

      <div id="description">
        <p>
          Load on demand and virtualization support is used to render a large number of tasks in the Gantt Chart with an effective performance.
          And so, in this demo, row virtualization is enabled with remote data binding which has 50,000 records.
        </p>
        <p>
          With the virtualization feature enabled in remote data binding, only the root level records are fetched from the remote server at the initial load time.
          So, need to set the <code>hasChildMapping</code> property of <code>taskFields</code> that denotes whichever records have child records and set <code>loadChildOnDemand</code> property as false.
        </p>
        <p>
          When expanding the root parent node or scrolling vertically, the corresponding tasks are dynamically fetched from the remote server and then updated in the DOM based on the current viewport position.
        </p>
      </div>
    </div>
  )
}
export default LoadOnDemand;
