const NCMB = require('ncmb');
const ncmb = new NCMB(process.env.APPLICATION_KEY, process.env.CLIENT_KEY);

(async () => {
  const push = new ncmb.Push();
  await push
    .set("immediateDeliveryFlag", true)
    .set("message", "ビルド完了しました")
    .set("target", ["ios", "android"])
    .send();
})();