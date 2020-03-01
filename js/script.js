function gen_password(len){
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567891234567890-=!@#$%^&*()_+{}[]:',.<>`~йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ";
    for (var i = 0; i < len; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    };
    return password;
};

document.getElementById('gen_pass').onclick = function() {
    var length_pass = document.getElementById('pass_length').value;
    document.getElementById('out').innerHTML = gen_password(length_pass);
};