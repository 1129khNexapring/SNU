(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_board");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"작성일\" type=\"STRING\" size=\"256\"/><Column id=\"작성자\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_boardList","20","30","1037","620",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_boardColumn");
            obj.set_autofittype("col");
            obj.set_borderRadius("2px");
            obj.set_cursor("pointer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성일\"/><Cell col=\"3\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:제목\"/><Cell col=\"2\" text=\"bind:작성일\"/><Cell col=\"3\" text=\"bind:작성자\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_boardWrite","22","0","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("글쓰기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_board.xfdl", function() {

        this.btn_boardWrite_onclick = function(obj,e)
        {
        	this.go("Base::frm_boardWriteForm.xfdl");
        };

        this.grd_boardList_oncelldblclick = function(obj,e)
        {
        	this.go("Base::frm_boardDetailView.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_boardList.addEventHandler("oncelldblclick",this.grd_boardList_oncelldblclick,this);
            this.btn_boardWrite.addEventHandler("onclick",this.btn_boardWrite_onclick,this);
        };
        this.loadIncludeScript("frm_board.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
