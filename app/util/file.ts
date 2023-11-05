export async function writeJson(filePath: string, data: Record<string, unknown> | Record<string, unknown>[]): Promise<void> {
    await Deno.writeTextFile(filePath, JSON.stringify(data));
}

export async function readJson<T>(filePath: string): Promise<T> {
    return JSON.parse(await Deno.readTextFile(filePath));
}
