// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Represents a 2D vector with x and y coordinates.
 */
export class Vector2 {
  /** The x coordinate of the vector. */
  x: number;
  
  /** The y coordinate of the vector. */
  y: number;

  /**
   * Creates a new instance of Vector2.
   *
   * @param x - The x coordinate of the vector.
   * @param y - The y coordinate of the vector.
   * @example
   * const vector = new Vector2(1, 2); // Creates a new Vector2 instance at (1, 2)
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Creates a zero vector (0, 0).
   *
   * @returns A new Vector2 instance with both coordinates set to zero.
   * @example
   * const zeroVector = Vector2.zero(); // Vector2 { x: 0, y: 0 }
   */
  static zero(): Vector2 {
    return new Vector2(0, 0);
  }

  /**
   * Creates a unit vector (1, 1).
   *
   * @returns A new Vector2 instance with both coordinates set to one.
   * @example
   * const unitVector = Vector2.one(); // Vector2 { x: 1, y: 1 }
   */
  static one(): Vector2 {
    return new Vector2(1, 1);
  }

  /**
   * Adds another vector to this vector.
   *
   * @param other - The vector to add.
   * @returns The current vector, after addition, allowing for method chaining.
   * @example
   * const vector1 = new Vector2(1, 2);
   * const vector2 = new Vector2(3, 4);
   * vector1.add(vector2); // vector1 is now (4, 6)
   */
  add(other: Vector2): this {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   *
   * @param other - The vector to subtract.
   * @returns The current vector, after subtraction, allowing for method chaining.
   * @example
   * const vector1 = new Vector2(5, 6);
   * const vector2 = new Vector2(3, 2);
   * vector1.sub(vector2); // vector1 is now (2, 4)
   */
  sub(other: Vector2): this {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  /**
   * Scales the vector by a given scalar.
   *
   * @param scalar - The scalar to multiply with.
   * @returns The current vector, after scaling, allowing for method chaining.
   * @example
   * const vector = new Vector2(2, 3);
   * vector.scale(2); // vector is now (4, 6)
   */
  scale(scalar: number): this {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  /**
   * Computes the dot product of this vector with another vector.
   *
   * @param other - The other vector.
   * @returns The dot product as a number.
   * @example
   * const vector1 = new Vector2(1, 2);
   * const vector2 = new Vector2(3, 4);
   * const dotProduct = vector1.dot(vector2); // dotProduct is 11
   */
  dot(other: Vector2): number {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * Computes the length (magnitude) of the vector.
   *
   * @returns The length of the vector as a number.
   * @example
   * const vector = new Vector2(3, 4);
   * const length = vector.length(); // length is 5
   */
  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Normalizes the vector to a unit vector.
   *
   * @returns The current vector, after normalization, allowing for method chaining.
   * If the vector length is zero, it returns the same vector.
   * @example
   * const vector = new Vector2(3, 4);
   * vector.normalize(); // vector is now (0.6, 0.8)
   */
  normalize(): this {
    const len = this.length();
    if (len === 0) return this;
    this.x /= len;
    this.y /= len;
    return this;
  }

  /**
   * Computes the distance between this vector and another vector.
   *
   * @param other - The other vector.
   * @returns The distance as a number.
   * @example
   * const vector1 = new Vector2(1, 2);
   * const vector2 = new Vector2(4, 6);
   * const distance = vector1.distance(vector2); // distance is 5
   */
  distance(other: Vector2): number {
    return Math.sqrt((other.x - this.x) ** 2 + (other.y - this.y) ** 2);
  }

  /**
   * Computes the angle in radians between this vector and another vector.
   *
   * @param other - The other vector.
   * @returns The angle in radians as a number.
   * @example
   * const vector1 = new Vector2(1, 0);
   * const vector2 = new Vector2(0, 1);
   * const angle = vector1.angle(vector2); // angle is π/2
   */
  angle(other: Vector2): number {
    const dotProduct = this.dot(other);
    const lengths = this.length() * other.length();
    return Math.acos(dotProduct / lengths);
  }

  /**
   * Creates a clone of the current vector.
   *
   * @returns A new Vector2 instance with the same coordinates.
   * @example
   * const vector = new Vector2(1, 2);
   * const clone = vector.clone(); // clone is a new Vector2 { x: 1, y: 2 }
   */
  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }

  /**
   * Converts the vector to an array of [x, y].
   *
   * @returns An array representing the vector's coordinates.
   * @example
   * const vector = new Vector2(1, 2);
   * const array = vector.array(); // array is [1, 2]
   */
  array(): [number, number] {
    return [this.x, this.y];
  }

  /**
   * Returns a string representation of the vector.
   *
   * @returns A string in the format "(x, y)".
   * @example
   * const vector = new Vector2(1, 2);
   * const str = vector.toString(); // str is "(1, 2)"
   */
  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
