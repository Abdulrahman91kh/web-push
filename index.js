const push = require('web-push');

// const vapidkeys = push.generateVAPIDKeys(); 
// console.log(vapidkeys);
// Just need these piece of code once to get our keys

const vapidkeys = {
	publicKey: 'BFz0a5SeLGVpHpWpl0qJCKu4HSTyEqQWsbULlgzYEJzBktbP_NGtPRlQOB-t_rg-1dVJVXNj3vigLy_LPmfZ654',
	privateKey: 'yLMED4phPqskYYoo8lpV0qxRBFwGDKKWD-fO_Vn7Krs'
};

push.setVapidDetails('https://storkyapp.com/en/pricing-plans/', vapidkeys.publicKey, vapidkeys.privateKey);

const sub;

push.sendNotification( sub, 'TEST MESSAGE');