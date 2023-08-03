const app=angular.module("myApp",[]);//Khai báo angular

//hàm myfilter,trả về CHỮ IN HOA sau khi được xử lý bằng vòng lặp .
app.filter('myfilter', function (){
    return function(x){ 
        var i ,c ,txt = "";
        for (i = 0; i<x.length; i++){//vòng lặp for duyệt qua từng phần tử trong chuỗi (x)
            c = x[i]; //Gán giá trị của phần tử thứ i trong chuỗi x vào biến c.
            c= c.toUpperCase(); //Sử dụng phương thức toUpperCase() để chuyển đổi ký tự c thành chữ hoa.
            txt += c; //Thêm ký tự c sau khi đã chuyển đổi thành chữ hoa vào biến txt.
        }
        //Trả về chuỗi txt, tức là chuỗi gồm tất cả các ký tự trong chuỗi ban đầu đã được chuyển đổi thành chữ hoa.
        return txt;
    };
   /* Sau khi được gọi từ  {{x | myfilter}} trong html , chuỗi (x) từ ng-repeat='x in programminglanguagenames' sẽ được 
   truyền qua myfilter.Sau đó, myfilter sẽ thực hiện việc chuyển đổi tất cả các ký tự trong x thành
    CHỮ HOA và trả về kết quả cho việc hiển thị trên giao diện.*/

});

app.controller("myCtrl",function($scope){
    //programminglanguagenames. Biến này là một mảng chứa các tên ngôn ngữ lập trình.
    $scope.programminglanguagenames = [
        'cobol',
        'pascal',//Đây là các chuỗi đơn giản chỉ là tên của các ngôn ngữ lập trình.
        'ruby',
        'php',
        'perl',
        'python', 
        'c',
        'c++',
        'java',
        'html',
        'css',
        'javascript',
        'basic',
        'lisp',
        'smalltalk',
        'bootstrap'
    ];
});