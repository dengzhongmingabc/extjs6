<%@ page language="java" contentType="text/html; charset=UTF-8" %>
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
  <html>
    <head>
        <%
        String path = request.getContextPath();
        String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
        %>
        <title>登录</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="pragma" content="no-cache">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0">
        <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
        <meta http-equiv="description" content="This is my page">
        <!-- 引入ExtJs样式 -->
        <link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css">
        <!-- 引入ExtJs核心Js -->
        <script type="text/javascript" src="ext/ext-bootstrap.js"></script>
        <script type="text/javascript" src="ext/build/ext-all.js"></script>
        <script type="text/javascript" src="locale-zh_CN.js"></script>
        <!-- 页面Js -->
        <script type="text/javascript" src="login.js"></script>
    </head>
    <body>
    <div id="formDemo"></div>
    </body>
</html>