const push = require('web-push');

// const vapidkeys = push.generateVAPIDKeys(); 
// console.log(vapidkeys);
// Just need these piece of code once to get our keys

const vapidkeys = {
	publicKey: 'BFz0a5SeLGVpHpWpl0qJCKu4HSTyEqQWsbULlgzYEJzBktbP_NGtPRlQOB-t_rg-1dVJVXNj3vigLy_LPmfZ654',
	privateKey: 'yLMED4phPqskYYoo8lpV0qxRBFwGDKKWD-fO_Vn7Krs'
};

push.setVapidDetails('https://storkyapp.com/en/pricing-plans/', vapidkeys.publicKey, vapidkeys.privateKey);

const sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/etBGLTaTgZw:APA91bFIKtanFPZQ1YXBfET79p-K7tSuEI2YirBxWloa3eJAVVvUpVi4i8-SqAFtlBsEkJB6RqFsQepF8U_cjLXIiNyK6ChT-byIUbM2KBbO_uAeOzta3MwZaIxKwg2DANfNUl_2IwGn", "expirationTime": null, "keys": { "p256dh": "BDoYATwPTxKuRftDvDntgHca1Un90YoW6jRyHEC70of8RpVGbeUdcJTDLXn-YHMKMBk-0i_lDlFTOgye9xcLR94", "auth": "s0ugk76-ow1HFDIRXyDOfA" } };

push.sendNotification( sub, 'TEST MESSAGE');