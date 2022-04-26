(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Tab");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize



            obj = new Tab("tab_mdi","57","1","413","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_mdi);
            obj.set_text("Tabpage2");
            this.tab_mdi.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        this.registerScript("Form_Tab.xfdl", function() {

        this.Form_Tab_onload = function(obj,e)
        {
        	this.tab_mdi.removeTabpage(0);
        };

        this.fn_addTab = function(oParam)
        {
        	this.tab_mdi.insertTabpage(oParam.LIST_ID, -1, "", oParam.LIST);
        }


        this.tab_mdi_onchanged = function(obj,e)
        {
        	var sTabId = obj.tabpages[e.postindex].name;
        	var objApp = nexacro.getApplication();
        	objApp.mainfram.VFrameSet00.HFrameSet00.VFrameset00.WorkFrame[sTabId].setFocus();
        };



        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        	//e.index로 접근
        	//탭페이지 삭제 removeTabpage
        	//화면 종료 메소드 close()
        	//gds_openForm Key값으로 findrow / deleteRow

        	var sTabId = obj.tabpages[e.index].name;
        	var objApp = nexacro.getApplication();
        	objApp.mainfram.VFrameSet00.HFrameSet00.VFrameset00.WorkFrame[sTabId].form.close();
        	obj.removeTabpage(e.index);

        	var nRow = objApp.p_openForm.findRow("LIST_ID", sTabId);
        	objApp.gds_openForm.deleteRow(nRow);
        };

        });

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

            this.addEventHandler("onload",this.Form_Tab_onload,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);

        };
        this.loadIncludeScript("Form_Tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
