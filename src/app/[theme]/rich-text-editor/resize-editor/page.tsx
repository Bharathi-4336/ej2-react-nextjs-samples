/**
 * Rich Text Editor Resizable sample
 */
'use client';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, Resize, RichTextEditorComponent, Toolbar, PasteCleanup, Table, Video, Audio} from '@syncfusion/ej2-react-richtexteditor';
import './resize-editor.css';
function ResizableEditor() {
    const resize: boolean = true;
    return (
        <div className='control-pane'>
            <div className='control-section resize-rte' id="rte">
                <div className='rte-control-section'>
                    <RichTextEditorComponent id="resizeRTE" enableResize={resize} height='250px'>
                        <p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
                            Users can format their content using standard toolbar commands.</p>
                        <Inject services={[HtmlEditor, Toolbar, Image, Link, Resize, QuickToolbar, PasteCleanup, Table, Video, Audio]} />
                    </RichTextEditorComponent>
                </div>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the resize operation of the Rich Text Editor control. To resize the Rich Text Editor, select and resize the editor using its handle (grip) at the bottom right corner of the content panel.</p>
            </div>
            <div id="description">
                <p>Users can create resizable Rich Text Editor by setting the <code>enableResize</code> property to true, which is used to change the size of the Rich Text Editor dynamically.</p>
            </div>
        </div>
    );
}
export default ResizableEditor;