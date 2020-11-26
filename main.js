
$(document).ready(function () {
  $('#btn-add').on('click', function () {
    $('#create-form').slideDown();
  });

  $('#btn-close').on('click', function () {
    $('#create-form').slideUp();
  });

  $('#btn-create').on('click', function (e) {
    var title = $('#title').val();
    var description = $('#desc').val();
    var date = $('#create-date').val();
    

    var productItem = `<tr>
      <td><input type="checkbox" /></td>
      <td>
        ${title}<br/>
        ${date}
      </td>
      <td>${description}</td>
      <td><button class="btn-del-row">X</td>
    </tr>`

    $('#product-list').append(productItem);//append == push;
  });

  $(document).on('click', '.btn-del-row', function() {
    $(this).parents('tr').remove();
  });
});
