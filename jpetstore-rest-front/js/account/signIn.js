$(document).ready(function () {

    $('#loginButton').click(function () {
        const username = $('#username').val();
        const password = $('#password').val();

        if(username == undefined || username == '') {
            $('#loginMessage').text("Please input username and password");
            return;
        }
        if(password == undefined || password == '') {
            $('#loginMessage').text("Please input username and password");
            return;
        }

        $.ajax({
            url: "",
            type: 'post',
            dataType: 'json',
            data: {
                username: username,
                password: password
            },
            success: function (res) {
                if(res.code == 1) {
                    const data = res.data;
                    // 保存token至sessionStorage
                    let authorization = data.userId + "_" + data.token;
                    sessionStorage.setItem("jpet-authorization", authorization);
                    // 跳转至main页面
                    let toMainHref = "../catalog/Main.html";
                    $('#toMain').attr('href', toMainHref);
                    $('#toMain').click();
                } else {
                    $('#loginMessage').text(res.msg);
                }
            },
            error:function () {

            }
        })

    });

});