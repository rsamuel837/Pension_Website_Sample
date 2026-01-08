function initEmbeddedMessaging() {
    try {
        embeddedservice_bootstrap.settings.language = 'en_US';

        embeddedservice_bootstrap.init(
            '00Dg5000000eYsk',
            'Platinum_Customer',
            'https://orgfarm-1e4b746825-dev-ed.develop.my.site.com/ESWPlatinumCustomer1763643447541',
            {
                scrt2URL: 'https://orgfarm-1e4b746825-dev-ed.develop.my.salesforce-scrt.com'
            }
        );
    } catch (err) {
        console.error('Error loading Embedded Messaging: ', err);
    }
}

// Load Salesforce bootstrap script dynamically
(function () {
    const script = document.createElement('script');
    script.src = 'https://orgfarm-1e4b746825-dev-ed.develop.my.site.com/ESWPlatinumCustomer1763643447541/assets/js/bootstrap.min.js';
    script.onload = initEmbeddedMessaging;
    script.type = 'text/javascript';
    document.body.appendChild(script);
})();
