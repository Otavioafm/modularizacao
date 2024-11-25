const p = require("./services/products");
const config=require("./services/config")
const database=require("./services/database")

async function main() {
    console.log("\ncarrinho de compras");
    database.databaseConnect()
    const productFullName = await p.getFullName("505", "Camiseta");
    console.log("ProdutoX: " + productFullName);

    await p.getProductLabel("Camistea");
    console.log(`\nDev Log: ${config.production}--${config.version}\n`)
}

main();
