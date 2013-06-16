$(document).ready(function(){
    //INIT BOARD
    var xx = 0, yy = 0, xClicked = 0, yClicked = 0;
    //create array
    var x = new Array(4);
    for (var i = 0; i < 4; i++) {
    x[i] = new Array(4);
    }

    //put random numbers into array
    for(var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var ok = false;

            while(!ok) {
                var temp = Math.floor(Math.random()*16);
                ok = true;
                for(var ii = 0; ii < 4; ii++) {
                    for(var jj = 0; jj < 4; jj++) {
                        if(temp === x[ii][jj]) {
                                ok = false;
                        }
                    }
                }
                if(ok) {
                    x[i][j] = temp;
                    if(temp === 0) {
                        xx = i;
                        yy = j;
                    }
                }
            }

            temp = '#'+i+j;
            $(temp).find('p').text(x[i][j]);
        }
    }

    //BLACK DIV
    temp = "#"+xx+yy;
    $(temp).css('background', 'black');
    $(temp).css('border', '2px solid black');

    //START GAME... :D
    $('.square').on('click', function() {
            temp = $(this).attr('id');
            xClicked = Math.floor(temp / 10);
            yClicked = temp % 10;

        //VALID MOVE? xx, yy, xClicked, yClicked
        if((xx === xClicked || yy === yClicked) && (Math.abs(xx - xClicked) === 1 || Math.abs(yy - yClicked) === 1)) {
                console.log("Valid.");
                x[xx][yy] = x[xClicked][yClicked];
                x[xClicked][yClicked] = 0;

                temp = '#' + xClicked + yClicked;
                $(temp).css('background', 'black');
                $(temp).css('border', '2px solid black');

                temp = '#' + xx + yy;
                $(temp).css('background', 'blue');
                $(temp).css('border', '2px solid white');
                $(temp).find('p').text(x[xx][yy]);

                xx = xClicked;
                yy = yClicked;
        } else {
                console.log(xx, xClicked, yy, yClicked);
        }
    });
});
