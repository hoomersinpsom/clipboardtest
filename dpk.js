const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function encrypt(text) {
  return crypto.createHash("sha3-512").update(text).digest("hex");
}

function deterministicPartitionKey(event) {
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event?.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    candidate = encrypt(data);
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = encrypt(candidate);
  }

  return candidate;
}

module.exports = { deterministicPartitionKey };
