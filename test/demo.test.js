describe('', () => {
  test("Example of 'First test'", () => {
    // 1. Arrage
    const messageOne = "Hi world!";
    // 2. Act
    const messageTwo = messageOne.trim();
    // 3. Assert
    expect(messageOne).toBe(messageTwo);
  })
})