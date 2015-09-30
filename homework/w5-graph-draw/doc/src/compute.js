var triangleType = 'Not a triangle';
var a = parseInt( $('#a_number').val() );
var b = parseInt( $('#b_number').val() );
var c = parseInt( $('#c_number').val() );
if ((a<0 || a>200) || (b<0 || b>200 ) || (c<0 || c>200)) {
    triangleType = 'Some input value is out of range';
} else if ( a <= b + c && b <= a + c && c <= a + b ) {
    if ( a == b && a == c ) {
        triangleType = 'Equilateral';
    } else if ( a != b && b != c && c != a ) {
        triangleType = 'Scalene';
    } else if (a*a==b*b+c*c || b*b==c*c+a*a || c*c==a*a+b*b) {
        triangleType = 'Right Triangle';
    } else {
        triangleType = 'Isoscalene';
    }
}
$('#log-msg').append('Triangle type: ' + triangleType + "<br>");
