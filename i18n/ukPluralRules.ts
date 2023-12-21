export const ukPluralRules = (choice: number) => {
  const pluralRules = new Intl.PluralRules('uk', { type: 'cardinal' });
  const form = pluralRules.select(choice);

  const formToIndexMapping: { [key in Intl.LDMLPluralRule]?: number } = {
    one: 0,
    few: 1,
    many: 2,
    other: 3,
  };

  return formToIndexMapping[form] ?? 3;
};
