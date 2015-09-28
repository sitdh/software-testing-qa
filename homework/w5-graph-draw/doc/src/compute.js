var triangleType = 'Not a triangle';
var a = parseInt( $('#a_number').val() );
var b = parseInt( $('#b_number').val() );
var c = parseInt( $('#c_number').val() );
if ( a <= b + c && b <= a + c && c <= a + b ) {
    if ( a == b && a == c ) {
        triangleType = 'Equilateral';
    } else if ( a != b && b != c && c != a ) {
        triangleType = 'Scalene';
    } else { 
        triangleType = 'Isoscalene'; 
    }
}
$('#log-msg').append('Triangle type: ' + triangleType + "\n");
