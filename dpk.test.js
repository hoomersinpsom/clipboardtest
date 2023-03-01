const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  test("Returns hash from event if partition key not provided", () => {
    const event = { name: "John Doe" };
    const result = deterministicPartitionKey(event);
    const expected =
      "8835664bea619ba796d7aac28eba97c9e7eb61bd0e1fbcdd672760f762f6f9549e5649fa3304dd7099592e00815d831d8304c26d87aff4971a9e5e558da03eee";
    expect(result).toEqual(expected);
  });

  test("Returns partition key from event if provided", () => {
    const event = { partitionKey: "12345" };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("12345");
  });

  test("Returns a partion key of type number to string", () => {
    const event = { partitionKey: 123 };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("123");
  });

  test("Hash a partition key if it excceds the 'MAX_PARTITION_KEY_LENGTH' size", () => {
    const result = deterministicPartitionKey({ partitionKey: "a".repeat(257) });
    const expected =
      "5008048b64c14975181175f157be4a780c3d443d2177edf323d57884bc7e3979b9b53bca1325e880df3da0d97c435693441cb5527fbe950f5585678dfbb37785";
    expect(result).toEqual(expected);
  });
});
