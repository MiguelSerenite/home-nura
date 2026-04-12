declare module 'amazon-paapi' {
  const amazonPaapi: {
    GetItems(commonParameters: Record<string, unknown>, requestParameters: Record<string, unknown>): Promise<{ ItemsResult: { Items: Record<string, unknown>[] } }>
  }
  export default amazonPaapi
}
