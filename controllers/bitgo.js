var BitGo = require('bitgo');

exports.getBitGo = function(req, res, next){
  var bitgo = new BitGo.BitGo({env: 'test', accessToken: 'bfdc143e13279c547ee675b3feacf3b6d4c2ffa04728883208817305f690278a'});
  var walletId = req.session.walletId;
  
  var renderWalletInfo = function(walletId) {
    bitgo.wallets().get({id: walletId},function(err, wallet){
      wallet.createAddress({}, function(err, address){
        wallet.transactions({}, function(err, transaction){
          res.send({wallet: wallet.wallet, transaction: transaction.transaction, address: address})
        });
      });
    });
  };
  
  if(walletId)
    renderWalletInfo(walletId);
  else
  {
    bitgo.wallets().createWalletWithKeychains({
      passphrase: "dsfsdfsdfsdreq.sessionId",
      label: 'wallet for sesion' + req.sessionId,
      backupXpub: 'xpub6GiRC55CRuhDiAt1qADcV3AMtZpjCvcavScVWNa7nC8Eo54gw83vCoUdEN9dgXr8iR23sChahhzmpWUVEM2YLL1GjwmqC7TC87KhShm36sZ'
    }, function(err, res){
        req.session.walletId = res.wallet.wallet.id;
      renderWalletInfo(req.session.walletId);
    });
  }
};