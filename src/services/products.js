async function getFullName(codeId, productName) {
    return codeId + "--" + productName;
}

async function getProductLabel(productName) {
    console.log("Product: " + productName);
}

module.exports = {
    getFullName, 
    getProductLabel, 
};
