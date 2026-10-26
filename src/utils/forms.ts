export function fieldDescriptionIds(
  id: string,
  options: { error?: boolean; hint?: boolean },
): string | undefined {
  const ids = [
    options.hint ? `${id}-hint` : undefined,
    options.error ? `${id}-error` : undefined,
  ].filter(Boolean);

  return ids.length > 0 ? ids.join(" ") : undefined;
}
