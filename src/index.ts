/**
 * Get a value from an object based on a key path
 * @param obj
 * @param key
 * @returns
 */
function getValueByKey<T>(
  obj: Record<number | string | symbol, any>,
  key: string
): T | null {
  return String(key)
    .split(".")
    .reduce((acc, cur: string) => acc?.[cur] ?? null, obj);
}

export default getValueByKey;
