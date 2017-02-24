$(function () {
    $.ajax({ // Taking Data from Json files and displaying it on the page
        url: 'json/a42580.json'
        , success: function (d) {
            $('.movie').text(d.title);
            $('.screen').text(d.screen);
            $('#image').attr('src', d.image);
            $('#runtime').text(d.runtime);
            $('#rating').text(d.rating);
            $('#numSeats1').text(d.numSeats);
            $('#numSeats2').text(d.numSeats);
            $('#unitPrice').text(d.unitPrice.toFixed(2));
            $('#subTotal').text(d.numSeats * d.unitPrice);

            var datetime = new Date(d.date); // Converts json data to display it on the index page
            $('.date').text(datetime.toUTCString().substr(0,16));
            $('.time').text(datetime.toUTCString().substr(17,5));

            var t = $('<table class="my-table" />').appendTo('#theatre');
            for (var i = 0; i < d.rowLabels.length; i++) {
                // Create a table row
                var tr = $('<tr/>').append($('<th/>', {
                    text: d.rowLabels[i]
                })).appendTo(t);
                // umap indicates if the seat is used
                // X indicates taken by someone else
                // O indicates available
                // M indicates my seat
                // space indicates no seat
                var u0 = d.umap[i].charAt(0);
                // tmap indicates the type of seat
                // L or R for left or right sofa, A for armchair, space for none
                var t0 = d.tmap[i].charAt(0);
                var td = $('<td/>');
                if (t0 === 'L') td.addClass('left-sofa'); // Classes given to data from rows 0 to 17
                if (t0 === 'R') td.addClass('right-sofa');
                if (t0 === 'A') td.addClass('armchair');
                if (u0 === 'X') td.addClass('taken');
                if (u0 === 'M') td.addClass('myseat');
                if (u0 === 'O') td.addClass('available');
                td.text();
                tr.append(td);
                var u1 = d.umap[i].charAt(1);
                var t1 = d.tmap[i].charAt(1);
                var td1 = $('<td/>');
                if (t1 === 'L') td1.addClass('left-sofa');
                if (t1 === 'R') td1.addClass('right-sofa');
                if (t1 === 'A') td1.addClass('armchair');
                if (u1 === 'X') td1.addClass('taken');
                if (u1 === 'M') td1.addClass('myseat');
                if (u1 === 'O') td1.addClass('available');
                td1.text();
                tr.append(td1);
                var u2 = d.umap[i].charAt(2);
                var t2 = d.tmap[i].charAt(2);
                var td2 = $('<td/>');
                if (t2 === 'L') td2.addClass('left-sofa');
                if (t2 === 'R') td2.addClass('right-sofa');
                if (t2 === 'A') td2.addClass('armchair');
                if (u2 === 'X') td2.addClass('taken');
                if (u2 === 'M') td2.addClass('myseat');
                if (u2 === 'O') td2.addClass('available');
                td2.text();
                tr.append(td2);
                var u3 = d.umap[i].charAt(3);
                var t3 = d.tmap[i].charAt(3);
                var td3 = $('<td/>');
                if (t3 === 'L') td3.addClass('left-sofa');
                if (t3 === 'R') td3.addClass('right-sofa');
                if (t3 === 'A') td3.addClass('armchair');
                if (u3 === 'X') td3.addClass('taken');
                if (u3 === 'M') td3.addClass('myseat');
                if (u3 === 'O') td3.addClass('available');
                td3.text();
                tr.append(td3);
                var u4 = d.umap[i].charAt(4);
                var t4 = d.tmap[i].charAt(4);
                var td4 = $('<td/>');
                if (t4 === 'L') td4.addClass('left-sofa');
                if (t4 === 'R') td4.addClass('right-sofa');
                if (t4 === 'A') td4.addClass('armchair');
                if (u4 === 'X') td4.addClass('taken');
                if (u4 === 'M') td4.addClass('myseat');
                if (u4 === 'O') td4.addClass('available');
                td4.text();
                tr.append(td4);
                var u5 = d.umap[i].charAt(5);
                var t5 = d.tmap[i].charAt(5);
                var td5 = $('<td/>');
                if (t5 === 'L') td5.addClass('left-sofa');
                if (t5 === 'R') td5.addClass('right-sofa');
                if (t5 === 'A') td5.addClass('armchair');
                if (u5 === 'X') td5.addClass('taken');
                if (u5 === 'M') td5.addClass('myseat');
                if (u5 === 'O') td5.addClass('available');
                td5.text();
                tr.append(td5);
                var u6 = d.umap[i].charAt(6);
                var t6 = d.tmap[i].charAt(6);
                var td6 = $('<td/>');
                if (t6 === 'L') td6.addClass('left-sofa');
                if (t6 === 'R') td6.addClass('right-sofa');
                if (t6 === 'A') td6.addClass('armchair');
                if (u6 === 'X') td6.addClass('taken');
                if (u6 === 'M') td6.addClass('myseat');
                if (u6 === 'O') td6.addClass('available');
                td6.text();
                tr.append(td6);
                var u7 = d.umap[i].charAt(7);
                var t7 = d.tmap[i].charAt(7);
                var td7 = $('<td/>');
                if (t7 === 'L') td7.addClass('left-sofa');
                if (t7 === 'R') td7.addClass('right-sofa');
                if (t7 === 'A') td7.addClass('armchair');
                if (u7 === 'X') td7.addClass('taken');
                if (u7 === 'M') td7.addClass('myseat');
                if (u7 === 'O') td7.addClass('available');
                td7.text();
                tr.append(td7);
                var u8 = d.umap[i].charAt(8);
                var t8 = d.tmap[i].charAt(8);
                var td8 = $('<td/>');
                if (t8 === 'L') td8.addClass('left-sofa');
                if (t8 === 'R') td8.addClass('right-sofa');
                if (t8 === 'A') td8.addClass('armchair')
                if (u8 === 'X') td8.addClass('taken');
                if (u8 === 'M') td8.addClass('myseat');
                if (u8 === 'O') td8.addClass('available');
                td8.text();
                tr.append(td8);
                var u9 = d.umap[i].charAt(9);
                var t9 = d.tmap[i].charAt(9);
                var td9 = $('<td/>');
                if (t9 === 'L') td9.addClass('left-sofa');
                if (t9 === 'R') td9.addClass('right-sofa');
                if (t9 === 'A') td9.addClass('armchair')
                if (u9 === 'X') td9.addClass('taken');
                if (u9 === 'M') td9.addClass('myseat');
                if (u9 === 'O') td9.addClass('available');
                td9.text();
                tr.append(td9);
                var u10 = d.umap[i].charAt(10);
                var t10 = d.tmap[i].charAt(10);
                var td10 = $('<td/>');
                if (t10 === 'L') td10.addClass('left-sofa');
                if (t10 === 'R') td10.addClass('right-sofa');
                if (t10 === 'A') td10.addClass('armchair')
                if (u10 === 'X') td10.addClass('taken');
                if (u10 === 'M') td10.addClass('myseat');
                if (u10 === 'O') td10.addClass('available');
                td10.text();
                tr.append(td10);
                var u11 = d.umap[i].charAt(11);
                var t11 = d.tmap[i].charAt(11);
                var td11 = $('<td/>');
                if (t11 === 'L') td11.addClass('left-sofa');
                if (t11 === 'R') td11.addClass('right-sofa');
                if (t11 === 'A') td11.addClass('armchair')
                if (u11 === 'X') td11.addClass('taken');
                if (u11 === 'M') td11.addClass('myseat');
                if (u11 === 'O') td11.addClass('available');
                td11.text();
                tr.append(td11);
                var u12 = d.umap[i].charAt(12);
                var t12 = d.tmap[i].charAt(12);
                var td12 = $('<td/>');
                if (t12 === 'L') td12.addClass('left-sofa');
                if (t12 === 'R') td12.addClass('right-sofa');
                if (t12 === 'A') td12.addClass('armchair')
                if (u12 === 'X') td12.addClass('taken');
                if (u12 === 'M') td12.addClass('myseat');
                if (u12 === 'O') td12.addClass('available');
                td12.text();
                tr.append(td12);
                var u13 = d.umap[i].charAt(13);
                var t13 = d.tmap[i].charAt(13);
                var td13 = $('<td/>');
                if (t13 === 'L') td13.addClass('left-sofa');
                if (t13 === 'R') td13.addClass('right-sofa');
                if (t13 === 'A') td13.addClass('armchair')
                if (u13 === 'X') td13.addClass('taken');
                if (u13 === 'M') td13.addClass('myseat');
                if (u13 === 'O') td13.addClass('available');
                td13.text();
                tr.append(td13);
                var u14 = d.umap[i].charAt(14);
                var t14 = d.tmap[i].charAt(14);
                var td14 = $('<td/>');
                if (t14 === 'L') td14.addClass('left-sofa');
                if (t14 === 'R') td14.addClass('right-sofa');
                if (t14 === 'A') td14.addClass('armchair')
                if (u14 === 'X') td14.addClass('taken');
                if (u14 === 'M') td14.addClass('myseat');
                if (u14 === 'O') td14.addClass('available');
                td14.text();
                tr.append(td14);
                var u15 = d.umap[i].charAt(15);
                var t15 = d.tmap[i].charAt(15);
                var td15 = $('<td/>');
                if (t15 === 'L') td15.addClass('left-sofa');
                if (t15 === 'R') td15.addClass('right-sofa');
                if (t15 === 'A') td15.addClass('armchair')
                if (u15 === 'X') td15.addClass('taken');
                if (u15 === 'M') td15.addClass('myseat');
                if (u15 === 'O') td15.addClass('available');
                td15.text();
                tr.append(td15);
                var u16 = d.umap[i].charAt(16);
                var t16 = d.tmap[i].charAt(16);
                var td16 = $('<td/>');
                if (t16 === 'L') td16.addClass('left-sofa');
                if (t16 === 'R') td16.addClass('right-sofa');
                if (t16 === 'A') td16.addClass('armchair')
                if (u16 === 'X') td16.addClass('taken');
                if (u16 === 'M') td16.addClass('myseat');
                if (u16 === 'O') td16.addClass('available');
                td16.text();
                tr.append(td16);
                var u17 = d.umap[i].charAt(17);
                var t17 = d.tmap[i].charAt(17);
                var td17 = $('<td/>');
                if (t17 === 'L') td17.addClass('left-sofa');
                if (t17 === 'R') td17.addClass('right-sofa');
                if (t17 === 'A') td17.addClass('armchair')
                if (u17 === 'X') td17.addClass('taken');
                if (u17 === 'M') td17.addClass('myseat');
                if (u17 === 'O') td17.addClass('available');
                td17.text();
                tr.append(td17);
            };

            $('td') // ID added to each td on the page
                .each(
                    function (index) {
                        $(this)
                            .attr("id", this.id + index);
                    });
            $('td').click(function () {
                if ($(this).hasClass('taken')) {
                    alert('This seat has allready been taken, please select another seat'); //stops the user from selecting a seat allready taken
                }
            });
            $('td').click(function () {
                //selecting available seats and changing the class
                var bs = $('td.myseat').length;
                //can i book this seat?
                if ($(this).hasClass('available')) {
                    $(this).addClass('myseat').removeClass('available');
                }
                else { // Unselecting a seat
                    if ($(this).hasClass('myseat')) {
                        $(this).addClass('available').removeClass('myseat');
                    }
                }
                var ms = $('td.myseat');

                $('#seatsAlloc').text(ms.length);
                var sl = ms.map(function () {
                    return ($(this).attr('id').toUpperCase()); // ads seat number to page for user to see which seat they have booked
                })
                var ul = $('<ul/>');
                for (var i = 0; i < sl.length; i++) {
                    ul.append($('<li/>', {
                        text: sl[i]
                    }));
                }
                $('#bookingSummary ul').remove();
                $('#bookingSummary').append(ul);
                if (($('#seatsAlloc').text() == 0) || $('#seatsAlloc').text() > 6) { // Doesnt let user continue if less than 0 seats and more than 6 seats have been booked
                    $('button').prop('disabled', true);
                }
                else {
                    $('button').prop('disabled', false); //
                };
            });
        }
    })
});
