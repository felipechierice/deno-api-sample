export const escapeSingleQuotes = (str: string): string => {
    return str.replace(/'/g, "''");
}
