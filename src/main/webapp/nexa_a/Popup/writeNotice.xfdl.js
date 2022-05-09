(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("writeNotice");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","10","582","454",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","37","16","85","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_border("1px solid gray, 0px solid gray, 0px solid gray, 1px solid gray");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","37","48","85","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_border("1px solid gray, 0px solid gray, 0px solid gray, 1px solid gray");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","37","83","85","213",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_border("1px solid gray, 0px solid gray, 1px solid gray, 1px solid gray");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","122","16","181","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_border("1px solid gray, 0px solid gray, 1px solid gray, 1px solid gray");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","303","16","85","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성날짜");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","388","16","161","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_border("1px solid gray, 1px solid gray, 1px solid gray, 0px solid gray");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","122","49","427","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_border("1px solid gray");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","122","84","427","213",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_border("0px solid gray, 1px solid gray, 1px solid gray");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","36","324","512","98",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","37","296","512","98",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"269\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"size\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:size\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_find","505","393","44","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("find");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","518","470","72","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("완료");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","22","468","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("writeNotice.xfdl", function() {

        this.Div00_btn_find_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };
        //파일을 추가하는 방법이 파일 선택 대화상자와 드래그앤드롭 두 가지로 나누어져서 추가한 파일을 처리하는 부분을 addFileList라는 function으로 분리
        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
        		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, 1);
        	}

        }

        //Grid컴포넌트의 drag, drop관련 이벤트 함수를 아래와 같이 작성
        // 사용자가 윈도우 탐색기에서 파일을 선택하고 드래그해서 Grid컴포넌트 영역으로 들어왔을 때
        //투명도 속성을 조정해서 뒤에 있는 static컴포넌트가 보여지도록 합니다. Grid컴포넌트 영역 밖으로
        //나가거나 드롭 동작이 처리되면 투명도를 다시 원래 상태로 돌려놓습니다

        //Grid 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다
        this.Div00_Grid00_ondragenter = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.Div00.form.Grid00.set_opacity(0.5);
        	}
        };
        //Grid 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.
        this.Div00_Grid00_ondragleave = function(obj,e)
        {
        	this.Div00.form.Grid00.set_opacity(1);
        };

        //Grid 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.
        this.Div00_Grid00_ondrop = function(obj,e)
        {
        	this.Div00.form.Grid00.set_opacity(1);
        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };
        //여기가 안먹는거같음 지금 보기에
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var nRowIdx = this.ds_data.addRow();
        			this.ds_data.setColumn(nRowIdx, 0, obj.filename);
        			this.ds_data.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			break;
        	}
        }

        this.FileList_onerrror = function(obj, e)
        {
        	trace("errortype:"+e.errortype);
        	trace("errormsg:"+e.errormsg);
        	trace("statuscode:"+e.statuscode);
        }

        //파일 크기를 적절한 단위로 표시하는 function을 아래와 같이 추가합니다.
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        }
        //upload버튼을 완료버튼으로 대체시키고싶다& 트랜잭션

        this.Button00_onclick = function(obj,e)
        {
        	//업로드 하는 코드는 나중에
        	//this.FileUpTransfer00.upload("");
        	var title = this.Div00.form.Edit00_01.value;
        	var content = this.Div00.form.TextArea00.value;
        	var dRow = this.ds_data.rowposition;
        	var name = this.ds_data.getColumn(dRow, "name");
        	this.transaction(
        	"tr_noticeRegister"
        	,"SnuURL::noticeNexa/register.snu"
        	,""
        	,""
        	,"title="+title+" content="+content+" name="+name+""
        	,"fn_callback_notice"
        	)
        };

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this.fn_addlog(e.code);
        	this.fn_addlog(e.message);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this.fn_addlog(e.errormsg);
        	this.fn_addlog(e.statuscode);
        };

        this.fn_addlog = function(strMessage)
        {


        }



        //폼이 로드됐을 때, 작성자와 작성날짜 셋팅
        this.writeNotice_onload = function(obj,e)
        {
        	this.Div00.form.Edit00.set_value("관리자");
        	this.Div00.form.Edit00.set_textAlign("center");
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));
        	this.Div00.form.Edit00_00.set_value(today);
        	this.Div00.form.Edit00_00.set_textAlign("center");
        };

        this.fn_callback_notice = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_noticeRegister")
        	{
        		if(nErrorCode>0)
        		{
        			var nRow = this.ds_data.rowposition;
        			var name = this.ds_data.getColumn(nRow, "name");
        			var filePath = "http://127.0.0.1:7776/index.snu"
        			this.FileUpTransfer00.upload(filePath+"\\"+name);
        		}


        	}
        }




        this.Button01_onclick = function(obj,e)
        {
        	var nRow = this.ds_data.rowposition;
        	var name = this.ds_data.getColumn(nRow, "name");
        	this.alert(name);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.writeNotice_onload,this);
            this.Div00.form.Grid00.addEventHandler("ondragenter",this.Div00_Grid00_ondragenter,this);
            this.Div00.form.Grid00.addEventHandler("ondragleave",this.Div00_Grid00_ondragleave,this);
            this.Div00.form.Grid00.addEventHandler("ondrop",this.Div00_Grid00_ondrop,this);
            this.Div00.form.btn_find.addEventHandler("onclick",this.Div00_btn_find_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("writeNotice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
