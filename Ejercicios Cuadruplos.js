// Ejercicio 1: r = a + (b - c) * d + (e / f * g)
let a = 10, b = 8, c = 3, d = 4, e = 20, f = 5, g = 2;
let t1 = b - c;
let t2 = t1 * d;
let t3 = a + t2;
let t4 = e / f;
let t5 = t4 * g;
let t6 = t3 + t5;
let r = t6;
console.log("r =", r); // Resultado: 26

// Ejercicio 2: x = ((m * n) / (p + q)) * (r * k)
let m = 6, n = 4, p = 5, q = 3, r_val = 2, k = 3;
let t1_2 = m * n;
let t2_2 = p + q;
let t3_2 = t1_2 / t2_2;
let t4_2 = r_val * k;
let t5_2 = t3_2 * t4_2;
let x = t5_2;
console.log("x =", x); // Resultado: 18

// Ejercicio 3: total = (a + b * c) * (d - e) - (f + g)
let a3 = 2, b3 = 3, c3 = 4, d3 = 10, e3 = 5, f3 = 6, g3 = 4;
let t1_3 = b3 * c3;
let t2_3 = a3 + t1_3;
let t3_3 = d3 - e3;
let t4_3 = t2_3 * t3_3;
let t5_3 = f3 + g3;
let t6_3 = t4_3 - t5_3;
let total = t6_3;
console.log("total =", total); // Resultado: 60

// Ejercicio 4: val = a * (b + (c / d)) - e * (f + g)
let a4 = 5, b4 = 2, c4 = 12, d4 = 4, e4 = 3, f4 = 1, g4 = 2;
let t1_4 = c4 / d4;
let t2_4 = b4 + t1_4;
let t3_4 = a4 * t2_4;
let t4_4 = f4 + g4;
let t5_4 = e4 * t4_4;
let t6_4 = t3_4 - t5_4;
let val = t6_4;
console.log("val =", val); // Resultado: 16

// Ejercicio 5: z = (x + y / o) * r + ((a * b + k) / (c + d))
let x5 = 10, y5 = 6, o5 = 2, r5 = 3, a5 = 4, b5 = 5, k5 = 8, c5 = 3, d5 = 4;
let t1_5 = y5 / o5;
let t2_5 = x5 + t1_5;
let t3_5 = t2_5 * r5;
let t4_5 = a5 * b5;
let t5_5 = t4_5 + k5;
let t6_5 = c5 + d5;
let t7_5 = t5_5 / t6_5;
let t8_5 = t3_5 + t7_5;
let z = t8_5;
console.log("z =", z); // Resultado: 43