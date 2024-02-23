import inquirer from 'inquirer';
async function main() {
    const todos = [];
    let loop = true;
    while (loop) {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'TODO',
                message: 'What do you want to add to your to-do list?',
            },
            {
                type: 'confirm',
                name: 'retry',
                message: 'Do you want to add more to-dos?',
                default: false,
            },
        ]);
        const { TODO, retry } = answers;
        if (TODO.trim() !== '') {
            todos.push(TODO);
        }
        else {
            console.log('Please add a valid input.');
        }
        loop = retry;
    }
    if (todos.length > 0) {
        console.log('\nYour Todo List:\n');
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });
    }
    else {
        console.log('\nNo Todos Found.');
    }
}
main();
