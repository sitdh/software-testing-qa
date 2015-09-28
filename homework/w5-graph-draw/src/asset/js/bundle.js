$(window).ready(function(){
    $('#triangle-calculator').submit(function(e){
        e.preventDefault();
        //
        // Code start here
        //
        var isTriangle = false;
        var triangleType = 'Not a triangle';
        var a = $('#a_number').val();
        var b = $('#b_number').val();
        var c = $('#c_number').val();

        if ( a <= b + c && b <= a + c && c <= a + b ) {
            isTriagle = true;

            if ( a == b && a == c ) {
                triangleType = 'Isoscelene';
            }
        }


        console.log('a ' + a);
        console.log('a ' + triangleType);
    });
});
