module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    //globalSetup: './config/setup.js',
    //globalTeardown: './config/teardown.js',
    //testEnvironment: './config/mongo-environment.js',
    testEnvironment: 'node'
};
