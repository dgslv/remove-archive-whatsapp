function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('._1lPgH').then((elm) => {
    my_xpath='/html/body/div[1]/div[1]/div[1]/div[3]/div/div[2]/button'
    let element = document.evaluate(my_xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    element.singleNodeValue.remove()
});
