function catClickHandler() {
  $("a.thumbnail").click(function(event) {
    let thumbImgSrc = $(event.currentTarget).find("img").attr("src");
    // let heroImgSrc = $(".hero").find("img").attr("src");
    $(".hero > img").attr('src', thumbImgSrc);
  });
}

catClickHandler();
