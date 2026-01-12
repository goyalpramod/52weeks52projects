class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  try {
     value = primitiveMultiply(a,b);
    return value;
    } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      reliableMultiply(a,b);
    }
    }
}

console.log(reliableMultiply(8, 8));
// → 64
