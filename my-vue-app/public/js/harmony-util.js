window.$(function() {
  // Use the Production environment
  Harmony.useEnv(Harmony.ENV_PRODUCTION);

  Harmony.init(
    "globirdenergyuser",
    "CUr8eT1maauoQXvozod7jPTroWTVzhvA",
    Harmony.AUSTRALIA
  );

  // Use the JSONP protocol
  Harmony.useProtocol(Harmony.JSONP);

  $("#siteAddress").autocomplete({
    // minimum number of entered characters before trying to search
    minLength: 3,
    // miliseconds to wait before trying to search
    delay: 500,

    source: function(request, response) {
      Harmony.address({ fullAddress: request.term }, Harmony.AUPAF, function(
        data
      ) {
        var array = [];
        if (data.status == Harmony.SUCCESS) {
          array = $.map(data.payload, function(p) {
            return {
              label: p.fullAddress
            };
          });
          response(array);
        }
      });
    },
    focus: function(event, ui) {
      // prevent autocomplete from updating the textbox
      event.preventDefault();
      // manually update the textbox
      $(this).val(ui.item.label);
    },
    select: function(event, ui) {
      // prevent autocomplete from updating the textbox
      event.preventDefault();
      // manually update the textbox
      $(this).val(ui.item.label);
    }
  });
});
