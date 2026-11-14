import { ryoppippi } from '@ryoppippi/eslint-config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = ryoppippi({
	type: 'app',
	stylistic: false,
});

export default config;																																																																																																																																																																																																																																																																										