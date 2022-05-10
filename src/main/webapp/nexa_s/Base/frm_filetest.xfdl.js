(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_filetest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","37","81","737","359",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_file");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_SIZE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","40","44","440","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","636","44","148","19",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload","491","45","119","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_filetest.xfdl", function() {


        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	var filePath = this.FileUpload00.value();
        	this.ds_file.addRow();
        	this.ds_file.setColumn(0, "FILE_PATH", filePath);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.btnUpload.addEventHandler("onclick",this.btnUpload_onclick,this);
        };
        this.loadIncludeScript("frm_filetest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
