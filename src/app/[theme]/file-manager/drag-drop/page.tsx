'use client';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';

/**
 * File Manager Drag and Drop feature sample
 */
const DragAndDrop = () => {

    let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
    return(
        <div>
            <div className="control-section">
                <FileManagerComponent id="filemanager" ajaxSettings = {{url: hostUrl + "api/FileManager/FileOperations", getImageUrl: hostUrl + "api/FileManager/GetImage", uploadUrl: hostUrl + 'api/FileManager/Upload', downloadUrl: hostUrl + 'api/FileManager/Download'}} toolbarSettings={{items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details']}} contextMenuSettings={{layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll']}} allowDragAndDrop={true}>
                    <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
                </FileManagerComponent>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the drag-and-drop feature of the File Manager. To drag and drop the file, select and drag a desired file or folder and drop it into the target folder. The File Manager component allows users to drag any file and drop it on any other folder in the same or different folder using the <code><a href="https://ej2.syncfusion.com/react/documentation/api/file-manager/#allowdraganddrop" target="_blank">allowDragAndDrop</a></code> property.</p>
            </div>
            <div id="description">
                <p>The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on.</p>
                <p>
                    <b>Note: </b>File Manager's upload functionality is restricted in the online demo. If you need to test upload functionality, please install 
                    <a target="_blank" href="https://www.syncfusion.com/downloads"> Syncfusion Essential Studio </a>on your machine and run the demo.
                </p>
            </div>
        </div>
    );
}
export default DragAndDrop;