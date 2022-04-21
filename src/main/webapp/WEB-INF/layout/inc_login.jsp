<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <div id="container">
        <h2>상남대 학사정보시스템</h2>
        <br><br><br><br><br><br><br><br><br><br>
        <ul class="tab">
            <li class="current" data-tab="tab1"><a hef="#">학생</a></li>
            <li data-tab="tab2"><a href="#">교수</a></li>
            <li data-tab="tab3"><a href="#">관리자</a></li>
            
        </ul>

        <div id="tab1" class="tabcontent current">
            <form action="" id="login-form-student">
             <br>ID :&nbsp;&nbsp; <input type="text" id="student_id"><br>  
               PW : <input type="password" id="student_pwd" ><br><br>
               <input type="button" id="login-student" value="로그인">
               <input type="reset" value="취소">
            </form>
        </div>
        <div id="tab2" class="tabcontent">
            <form action="" id="login-form-professor">
                <br>ID :&nbsp;&nbsp; <input type="text"  id="professor_id"><br>  
                  PW : <input type="password"  id="professor_pwd"><br><br>
                  <input type="button" id="login-professor" value="로그인">
                  <input type="reset" value="취소">
            </form>
        </div>
        <div id="tab3" class="tabcontent">
            <form action="" id="login-form-admin">
                <br>ID :&nbsp;&nbsp; <input type="text" id="admin_id"><br>  
                  PW : <input type="password" id="admin_pwd"><br><br>
                  <input type="button" id="login-admin" value="로그인">
                  <input type="reset" value="취소">
               </form>
        </div>
       </div>