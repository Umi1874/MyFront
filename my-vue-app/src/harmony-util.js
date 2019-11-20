import '@/assets/harmony-1.6.6.min.js'
import '@/assets/harmony-ui-1.6.6.min.js'
import '@/assets/jquery-ui.min.js'
import '@/assets/jquery.min.js'

export function addressService() {
      // Use the Production environment
      Harmony.useEnv(Harmony.ENV_PRODUCTION);
      Harmony.init("globirdenergyuser", "CUr8eT1maauoQXvozod7jPTroWTVzhvA", Harmony.AUSTRALIA);
      // Use the JSONP protocol
      Harmony.useProtocol(Harmony.JSONP);
      var opt = {
        minLength: 3,
        // skip transaction call when address selected. You need to make your own call depending on your business flow.
        skipTransaction: false
      };
      Harmony.UI.addressLookup($("#siteAddress"), "AUPAF", opt);
}