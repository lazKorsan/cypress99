const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tests = {
  'US033': 'src/test/java/cypress/integration/cypress/e2e/US033OrderCreateDelete.cy.js',
  'US034': 'src/test/java/cypress/integration/cypress/e2e/US034SimpleCommand.cy.js'
};

function runTest(testName) {
  return new Promise((resolve, reject) => {
    console.log(`\n🚀 Running ${testName}...\n`);
    const process = exec(`npx cypress run --spec "${tests[testName]}"`);

    process.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    process.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    process.on('close', (code) => {
      console.log(`\n✅ ${testName} completed with code ${code}`);
      resolve(code);
    });
  });
}

function showMenu() {
  console.log('\n========================');
  console.log('   CYPRESS TEST RUNNER');
  console.log('========================\n');
  console.log('1. US033 - Order Create/Delete');
  console.log('2. US034 - Simple Command');
  console.log('3. Both Tests (Sequential)');
  console.log('4. Both Tests (Parallel)');
  console.log('5. Exit\n');

  rl.question('Select option [1-5]: ', async (answer) => {
    switch(answer) {
      case '1':
        await runTest('US033');
        showMenu();
        break;
      case '2':
        await runTest('US034');
        showMenu();
        break;
      case '3':
        console.log('\n🔄 Running tests sequentially...');
        await runTest('US033');
        await runTest('US034');
        console.log('\n✅ All tests completed!');
        showMenu();
        break;
      case '4':
        console.log('\n⚡ Running tests in parallel...');
        await Promise.all([runTest('US033'), runTest('US034')]);
        console.log('\n✅ All tests completed!');
        showMenu();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('❌ Invalid option');
        showMenu();
    }
  });
}

showMenu();