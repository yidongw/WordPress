if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    $(".Vandroid").hide();
    $(".Vandroid2").hide();
} else if (/(Android)/i.test(navigator.userAgent)) {
    $(".Vapple").hide();
} else {
    $(".Vandroid").show();
    $(".Vandroid2").show();
    $(".Vapple").show();
}
