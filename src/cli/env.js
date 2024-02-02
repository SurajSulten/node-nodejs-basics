const parseEnv = () => {
    const { execSync } = require('child_process');

        const commandOutput = execSync('printenv').toString();
        const envVariables = commandOutput.split('\n');

        const rssVariables = {};
        envVariables.forEach(variable => {
            if (variable.startsWith("RSS_")) {
                const [key, value] = variable.split('=');
                rssVariables[key] = value;
            }
        });

        for (const key in rssVariables) {
            console.log(`RSS_${key}=${rssVariables[key]};`);
        }

    };

parseEnv();