const hre = require("hardhat");

async function main() {
	// We get the contract to deploy with the four parameters (Collection name , initials, url base , url placeholder )
	const ThreeDigitals = await hre.ethers.getContractFactory("ThreeDigitals");
	const threedigitals = await ThreeDigitals.deploy(
		"ThreeDigitals",
		"THD",
		"ipfs://QmZqjdvjQ5ENjxNwJxKf9YwLJKsfHea7eqFfGjBpCRTV7S/",
		"ipfs://QmSSM9DcivCtvjEuYJ5AKVMCan5NxwvUkR9vwFMDWjuGt6/placeholder-thd.json"
	);

	await threedigitals.deployed();
	console.log("ThreeDigitals deployed to:", threedigitals.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
