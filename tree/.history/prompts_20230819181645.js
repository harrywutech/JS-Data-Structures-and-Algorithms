import { select } from "@inquirer/prompts";

async function askQuestion() {
    const choices = ['Option 1', 'Option 2', 'Option 3'];

    const answer = await select('Which option do you choose?', choices);

    console.log(`You chose ${answer}`);
}

askQuestion();