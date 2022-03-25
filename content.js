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

const archivedClass = "._2nY6U._1frFQ";

waitForElm(archivedClass).then(async(elm) => {
    try {
        elm.remove()

        while (true) {
            const element = await waitForElm(archivedClass)
            element.remove()
        }
    }
    catch(error) {
        console.log('Erro ao tentar remover elemento', error)   
    }
});
