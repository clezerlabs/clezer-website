$(document).ready(function () {
        
    var $rangeJohn = $("#range_john"),
        $rangeMichael = $("#range_michael"),
        $rangeElsa = $("#range_elsa"),
                                           
    $totalLimit = $("#totalCardLimit");  
        
var track = function () {
    var $this = $(this),
    //value = $this.prop("value");
    valueJohn = $rangeJohn.prop("value"),
    valueMichael = $rangeMichael.prop("value"),
    valueElsa = $rangeElsa.prop("value"),
    valueTotal = +valueJohn + +valueMichael + +valueElsa;   
    
    $totalLimit.html(valueTotal + ' €');
                                        };
        

        $rangeJohn.ionRangeSlider({
    grid: false,
    min: 0,
    max: 400,
    from: 190,
    grid_num: 1,
    postfix: ' €',
    hide_min_max: true,
        });
        
    $rangeJohn.on("change", track);

        $rangeMichael.ionRangeSlider({
    grid: false,
    min: 0,
    max: 400,
    from: 120,
    grid_num: 1,
    postfix: ' €',
    hide_min_max: true,
        });

    $rangeMichael.on("change", track);        
        
        $rangeElsa.ionRangeSlider({
    grid: false,
    min: 0,
    max: 400,
    from: 280,
    grid_num: 1,
    postfix: ' €',
    hide_min_max: true,
        });
    $rangeElsa.on("change", track);        

    });