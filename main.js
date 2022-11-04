function bloqueia_mouse_teclado() {

    // CTRL V v
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '118' || event.which == '86')) {
                event.preventDefault();
            }
        });
    });

    // CTRL C c
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '97' || event.which == '67')) {
                event.preventDefault();
            }
        });
    });

    // CTRL U u
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '85' || event.which == '117')) {
                event.preventDefault();
            }
        });
    });

    // CTRL A a
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '65' || event.which == '97')) {
                event.preventDefault();
            }
        });
    });

    // CTRL S s
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '83' || event.which == '115')) {
                event.preventDefault();
            }
        });
    });

    // CTRL X x
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '88' || event.which == '120')) {
                event.preventDefault();
            }
        });
    });

    // CTRL J j
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '74' || event.which == '106')) {
                event.preventDefault();
            }
        });
    });



    // Bloquear botão direito do mouse
    $(document).bind("contextmenu", function(e) {
        return false;
    });
}


bloqueia_mouse_teclado();