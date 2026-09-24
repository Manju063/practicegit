const tseslint = require('typescript-eslint');
const playwright = require('eslint-plugin-playwright');
const globals = require('globals');

module.exports = tseslint.config(

    // ============================================================
    // 1. ESLint configuration file itself
    // ============================================================
    {
        files: ['eslint.config.js'],

        languageOptions: {
            globals: globals.node
        }
    },


    // ============================================================
    // 2. Ignore generated / external folders
    // ============================================================
    {
        ignores: [
            'node_modules/**',
            'playwright-report/**',
            'test-results/**',
            'test-results*/**',
            'blob-report/**'
        ]
    },


    // ============================================================
    // 3. TYPESCRIPT FILES
    //    Applies to .ts files
    // ============================================================
    {
        files: ['**/*.ts'],

        ...tseslint.configs.recommendedTypeChecked[0],

        plugins: {
            '@typescript-eslint': tseslint.plugin,
            playwright
        },

        languageOptions: {
            parser: tseslint.parser,

            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname
            }
        },

        rules: {

            // ----------------------------------------------------
            // Promise / async-await checking
            // ----------------------------------------------------

            // Detect:
            // page.goto(...)
            // instead of:
            // await page.goto(...)
            //
            // WARNING only - will NOT block your test execution.
            '@typescript-eslint/no-floating-promises': 'warn',

            // Detect incorrect:
            // await "hello"
            '@typescript-eslint/await-thenable': 'warn',

            // Detect incorrect Promise usage
            '@typescript-eslint/no-misused-promises': 'warn',

            // Warn if async function doesn't actually need async
            '@typescript-eslint/require-await': 'warn',


            // ----------------------------------------------------
            // General TypeScript help
            // ----------------------------------------------------

            // Don't force you to remove every unused variable
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                }
            ],

            // Allow any while you're learning
            '@typescript-eslint/no-explicit-any': 'warn'
        }
    },


    // ============================================================
    // 4. JAVASCRIPT FILES
    //    Applies to .js files
    // ============================================================
    {
        files: ['**/*.js'],

        plugins: {
            playwright
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },

        rules: {

            // ----------------------------------------------------
            // Playwright async/await checking
            // ----------------------------------------------------

            // Warn about missing await where the Playwright
            // plugin can identify it.
            'playwright/missing-playwright-await': 'warn',


            // ----------------------------------------------------
            // IMPORTANT:
            // page.pause() is allowed
            // ----------------------------------------------------

            // We intentionally turn this OFF because you are
            // learning/debugging with page.pause().
            'playwright/no-page-pause': 'off',


            // ----------------------------------------------------
            // Other Playwright rules
            // ----------------------------------------------------

            // Don't use hard waits unnecessarily.
            // Warning only.
            'playwright/no-wait-for-timeout': 'warn'
        }
    }

);
