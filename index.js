const push = require('web-push');

// const vapidkeys = push.generateVAPIDKeys(); 
// console.log(vapidkeys);
// Just need these piece of code once to get our keys

const vapidkeys = {
	publicKey: 'BFz0a5SeLGVpHpWpl0qJCKu4HSTyEqQWsbULlgzYEJzBktbP_NGtPRlQOB-t_rg-1dVJVXNj3vigLy_LPmfZ654',
	privateKey: 'yLMED4phPqskYYoo8lpV0qxRBFwGDKKWD-fO_Vn7Krs'
};

push.setVapidDetails('https://storkyapp.com/en/pricing-plans/', vapidkeys.publicKey, vapidkeys.privateKey);

const sub = [
	{ "endpoint": "https://fcm.googleapis.com/fcm/send/etBGLTaTgZw:APA91bFIKtanFPZQ1YXBfET79p-K7tSuEI2YirBxWloa3eJAVVvUpVi4i8-SqAFtlBsEkJB6RqFsQepF8U_cjLXIiNyK6ChT-byIUbM2KBbO_uAeOzta3MwZaIxKwg2DANfNUl_2IwGn", "expirationTime": null, "keys": { "p256dh": "BDoYATwPTxKuRftDvDntgHca1Un90YoW6jRyHEC70of8RpVGbeUdcJTDLXn-YHMKMBk-0i_lDlFTOgye9xcLR94", "auth": "s0ugk76-ow1HFDIRXyDOfA" } },
	{ "endpoint": "https://fcm.googleapis.com/fcm/send/fS76XYtCUxM:APA91bFdIxFcOSGZ3SVKWJwnxNdG5tU6Pea7L6UX5g2pMZcwhb8KjRKsn3Q2jRzUdbw9ESLo7ibjdCFypEQUhwOshiAMUf4RukE0TVFPz9B_8K_qO837JpTshS-sC6fr1Y0GIzlLZdDk", "expirationTime": null, "keys": { "p256dh": "BJg-pTHop1ctlUSIvGMRw1lfGXZuBDHcgG_Rt9ywIPj5wXqejihyE9-CCnyDk8FWr5cbco3Co74XRCJhOqlcODg", "auth": "zgIwG6ZpUmQ2VG9JuQhEfg" } },
	{ "endpoint": "https://fcm.googleapis.com/fcm/send/fgTX8tiMGS0:APA91bEK-ANNWYK5nL1o7UKy0pwZ3HLg5WnbjevTDw_FFXluw66itEVIFYIrRhH_-E2su4I9o08GE7DV5yZ1nxABo3X7yYtgDipjN5BysuvGWzxnKrg_0qXRl4u6Zz8TjRb168qo2Has", "expirationTime": null, "keys": { "p256dh": "BNucaSa6ZZI1OjGr1S845Y7lPWnAz9PtqBU1Uw5BQqmSY-BgP0e_u-wvi0SIzcQP2oU26NDTKXtJ3SIrav13I9E", "auth": "Ax6qKilSiQwp9TIkg7q9Uw" } }
];
sub.forEach(single => push.sendNotification(single, 'I love you'));
