



$(document).ready(function(){

    $("#search").on("keyup", function() {

        let value = $(this).val().toLowerCase();
        $("#left-table tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

    });

    $("#left-table").on('click','.add-row',function(){
        // get the current row
        let currentRow=$(this).closest("tr");

        let id = currentRow.attr('id');
        let email = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        let username = currentRow.find("td:eq(1)").text(); // get current row 2nd TD

        $(this).closest("button").replaceWith('<svg id='+id+' xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="green" class="bi bi-check" viewBox="0 0 16 16">\n' +
            '                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>\n' +
            '                    </svg>');


        $('#right-table').append(
            '<tr id='+id+'>' +
                '<td>' + email + '</td>' +
                '<td>'+ username +'</td>' +
                '<th scope="row">' +
                    '<button type="button" class="btn btn-danger delete-row">' +
                    'حذف' +
                    '</button>' +
                '</th>' +
            '</tr>'
        )
        $( "#right-table" ).sortable();
    });



    $("#right-table").on('click', '.delete-row', function(){

        let currentRow=$(this).closest("tr");
        currentRow.remove();

        let id = currentRow.attr('id');

        $('#left-table  #'+id+' #'+id).replaceWith('<button type="button" class="btn btn-success add-row">افزودن</button>')

    })


});

