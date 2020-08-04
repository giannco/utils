//get multiple rows in datatables with input search
var table = $('#Example').DataTable();
$('#Example_filter input').unbind().keyup(function() {
	var arr = $(this).val().split(';');
	var pattern = arr.join('|');
    table.search(this.value = pattern, true, false).draw();

});
