const textbookApi = require('../api/textbook/textbookApi')

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    text: () => Promise.resolve(JSON.stringify({ authenticated: true, message: "", textbooks: [] })),
  })
)
test('Empty authorization', async () =>{
    let data = await textbookApi.loadTextbooks('');
    expect(data).toBe(null);
})

test('null authorization', async () =>{
    let data = await textbookApi.loadTextbooks(null);
    expect(data).toBe(null);
})

test('ok is false', async () =>{
    let data = await textbookApi.loadTextbooks('access token');
    expect(data).toStrictEqual({authenticated: true, message: "", textbooks: []});
})