$(window).ready(function(){
    $('#triangle-calculator').submit(function(e){
        $('#log-msg').append('Form submited<br>');
        e.preventDefault();
        //
        // Code start here
        //
        var triangleType = 'Not a triangle';
        $('#log-msg').append('Assigned default value <br>');

        var a = parseInt( $('#a_number').val() );
        var b = parseInt( $('#b_number').val() );
        var c = parseInt( $('#c_number').val() );
        $('#log-msg').append("Triangle's sides received<br>");

        if ((a<0 || a>200) || (b<0 || b>200) || (c<0 || c>200 ) ) {
            $('#log-msg').append('Some input value is out of range<br>');
            triangleType = 'Some input value is out of range';
        } else {
            $('#log-msg').append('Sides are well-formed<br>');

            if ( a <= b + c && b <= a + c && c <= a + b ) {
                $('#log-msg').append('Sides should be formed in triangle<br>');

                if ( a == b && a == c ) {
                    $('#log-msg').append('Sides are equal<br>');
                    triangleType = 'Equilateral';

                } else if ( a != b && b != c && c != a ) {
                    $('#log-msg').append("Sides arrn't equal<br>");
                    triangleType = 'Scalene';

                } else if ( a*a == b*b + c*c || b*b == c*c + a*a || c*c == a*a + b*b ) {
                    $('#log-msg').append("Pythagorus check<br>");
                    triangleType = 'Right Triangle';

                } else {
                    $('#log-msg').append("2 sides equal, but one<br>");
                    triangleType = 'Isoscalene';
                }

                $('#log-msg').append("Triangle categorized<br>");
            }

        }

        $('#log-msg').append("Prepared for print out<br>");
        $('#result-msg').append('Triangle type: ' + triangleType + "<br />");
        // 
        // Code end here
        // 
    });
});
