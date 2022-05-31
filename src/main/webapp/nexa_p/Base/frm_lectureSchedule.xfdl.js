(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lectureScheduler");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"월\" type=\"STRING\" size=\"256\"/><Column id=\"화\" type=\"STRING\" size=\"256\"/><Column id=\"수\" type=\"STRING\" size=\"256\"/><Column id=\"목\" type=\"STRING\" size=\"256\"/><Column id=\"금\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"월\">데이터베이스의 기초</Col><Col id=\"화\">객체지향 프로그래밍의 기초와 이해</Col></Row><Row/><Row><Col id=\"화\">나는빅데이터를진짜로배운적이없다니깐요</Col><Col id=\"금\">파이썬</Col></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","78","52","822","336",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"화\"/><Cell col=\"2\" text=\"수\"/><Cell col=\"3\" text=\"목\"/><Cell col=\"4\" text=\"금\"/></Band><Band id=\"body\"><Cell text=\"bind:월\"/><Cell col=\"1\" text=\"bind:화\"/><Cell col=\"2\" text=\"bind:수\"/><Cell col=\"3\" text=\"bind:목\"/><Cell col=\"4\" text=\"bind:금\"/></Band></Format></Formats>");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frm_lectureSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
