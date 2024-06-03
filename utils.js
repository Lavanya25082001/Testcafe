import { Selector } from 'testcafe';

// Utility function to select elements by XPath
const getElementByXPath = (xpath) => {
    return Selector(() => {
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
    }, { dependencies: { xpath } });
};

export default getElementByXPath;

