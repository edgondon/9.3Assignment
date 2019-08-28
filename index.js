
$(document).ready(function () {

    
    $("form").on('click', 'button', function (event) {
      event.preventDefault();
      let task = document.getElementById('shopping-list-entry').value;
      document.forms['js-shopping-list-form'].reset();
      $('.shopping-list').prepend(`<li>
          <span class="shopping-item">`+ task + `</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
        )
        event.preventDefault();
    });
  
    $("ul").on("click", ".shopping-item-toggle", function() {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
  
    $("ul").on("click", ".shopping-item-delete", function() {
        $(this).closest("li").remove();
    });
  
  
  
  
  })
    
    