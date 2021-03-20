/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function movingButton(){
    document.getElementById( "moving_button" ).setAttribute( "onClick", "removeClass();" );
    document.getElementById('moving_button').classList.remove='moving_down_button';
    document.getElementById('moving_button').className='moving_button';
  }
  function removeClass(){
    document.getElementById( "moving_button" ).setAttribute( "onClick", "movingButton();" );
    document.getElementById('moving_button').classList.remove='moving_button';
    document.getElementById('moving_button').className='moving_down_button';
  }