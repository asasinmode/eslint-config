import ifNewline from './rules/if-newline';
import importDedupe from './rules/import-dedupe';
import genericSpacing from './rules/generic-spacing';

export default {
  rules: {
    'if-newline': ifNewline,
    'import-dedupe': importDedupe,
    'generic-spacing': genericSpacing,
  },
};
